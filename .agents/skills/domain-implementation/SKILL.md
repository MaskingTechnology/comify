# Domain Feature Implementation

## Overview

This skill guides the implementation of new features within a bounded context in the Comify project. It covers the full lifecycle from domain analysis through to tested, production-ready code following project conventions.

## When to Use

Invoke this skill when:
- A new feature needs to be added to an existing bounded context (e.g., `social`, `insights`, `moderation`)
- A new bounded context needs to be scaffolded and populated with initial domain logic
- An existing feature requires extension with new domain rules or use cases

## Prerequisites

Before starting implementation, ensure you have:

1. **Clear requirement** — What the feature should do, its boundaries, and success criteria
2. **Domain knowledge** — Understanding of the relevant bounded context and its existing models
3. **Dependency awareness** — Knowledge of which shared services (Keycloak, MongoDB, SeaweedFS, Kafka) the feature interacts with

## Implementation Workflow

### Step 1: Domain Analysis

1. **Identify the bounded context** — Determine which context the feature belongs to (`social`, `insights`, `moderation`, or a new one).
2. **Map domain entities** — Identify the core domain objects, their properties, and relationships.
3. **Define use cases** — Break down the feature into atomic use-case functions (e.g., `create`, `read`, `update`, `delete`, `toggleRating`).
4. **Identify external dependencies** — Note which shared services are required (authentication, database, file storage, event streaming).

> **Rule:** Each use-case function should be pure, focused on a single responsibility, and independently testable.

### Step 2: Domain Model Design

1. **Define TypeScript types** for both the **Record** (database layer) and the **Domain Model** (business layer).
2. **Establish validation rules** via the shared `validator` singleton (`@comify/common/integrations/validation`, which wraps `@theshelf/validation`) or custom validators.
3. **Define error types** specific to the domain (use domain-specific error classes, not generic errors).
4. **Document invariants** — invariants that must hold true for the domain model.

#### Record vs Domain Model

The implementation maintains a clear separation between the **Record** (database/storage layer) and the **Domain Model** (business layer):

- **Record**: Represents the raw database document. Use `string` for IDs (as stored in MongoDB), include tenant scoping, soft-delete flags, and foreign keys to related entities.
- **Domain Model**: Represents the business entity presented to callers. Use `Identifier` for IDs, resolve relationships into rich domain objects (`Relation`, `Comic`, `Comment`), and expose computed properties (`hasParent`, `isRated`).

```typescript
// Example: development/social/domain/post/definitions.ts
import { type Identifier } from '@comify/common/primitives/identifier';

import { type Comic } from '~/post.comic';
import { type Comment } from '~/post.comment';
import { type Metrics } from '~/post.metrics';
import { type Relation } from '~/relation';

import { type BaseRecord } from '../definitions';

export type Record = BaseRecord & {
    readonly tenantId: string;
    readonly id: string;
    readonly creatorId: string;
    readonly comicId?: string;
    readonly commentId?: string;
    readonly parentId?: string;
    readonly createdAt: string;
    readonly deleted: boolean;
};

export type Post = {
    readonly id: Identifier;
    readonly parentId?: Identifier;
    readonly createdAt: Date;
    readonly creator: Relation;
    readonly comic?: Comic;
    readonly comment?: Comment;
    readonly hasParent: boolean;
    readonly metrics: Metrics;
    readonly isRated: boolean;
};

export const RECORD_TYPE = 'post';
```

#### Key Conventions

- **Record IDs** are `string` (raw MongoDB `_id` values); **Domain Model IDs** are `Identifier` instances.
- **Relationships** in the Record are foreign key strings (`creatorId`, `comicId`, `parentId`); in the Domain Model they are resolved objects (`creator: Relation`, `comic?: Comic`, `comment?: Comment`).
- **Computed properties** (`hasParent`, `isRated`) are derived from the data and do not exist in the Record.
- **`RECORD_TYPE`** constant is exported for use by database queries (`database.searchRecords<Record>(RECORD_TYPE, ...)`).
- **Soft-delete** is indicated by a `deleted: boolean` flag in the Record.
- **Tenant scoping** is always present via `tenantId` for multi-tenant isolation.

### Step 3: Use-Case Implementation

Implement each use-case function following these conventions:

1. **File location:** `development/<context>/domain/<feature>/<use-case>/index.ts` — each use case gets its own **directory** with an `index.ts` as the public entry point. A use case may be a single file instead of a directory when it has no helpers of its own (e.g. `development/social/domain/post/getById/index.ts`).
2. **Naming (public use cases):** camelCase directory names (`establish`, `explore`, `get`, `getById`, `getByCreator`, `getByFollowing`, `getByParent`, `getFollowers`, `getFollowing`, `getMany`, `getManyById`, `getRecommended`, `createWithComic`, `createWithComment`, `remove`).
3. **Naming (internal helpers):** `_camelCase` subdirectories for private/internal helpers (`_create`, `_retrieveById`, `_toModel`, `_toModels`, `_translateMany`, `_retrieveFollowing`). These are not use cases themselves but are shared building blocks consumed by one or more public use cases (e.g. `post/_create` is the shared creation logic used by both `post/createWithComic` and `post/createWithComment`).
4. **Pure functions** where possible; side effects (DB, external APIs) should be explicit and isolated.
5. **Error handling:** Domain-specific error classes extending `@comify/common/integrations/errors` types (e.g., `BadRequest`, `NotFound`).
6. **Type imports** inline: `import type { Post } from '../types'`
7. **Single quotes**, no semicolons.

```typescript
// Example: development/social/domain/relation/establish/index.ts
import { type Requester } from '@comify/common/security';

import { type RelationKey } from '../definitions';
import { logger } from '../integrations';

import create from './create';
import exists from './exists';
import publish from './publish';
import RelationAlreadyExists from './RelationAlreadyExists';
import remove from './remove';

export default async function (requester: Requester, followingId: string): Promise<void>
{
    const key: RelationKey = { followerId: requester.principalId, followingId };

    const relationExists = await exists(key);

    if (relationExists)
    {
        throw new RelationAlreadyExists();
    }

    await create(key);

    try
    {
        await publish(requester, key);
    }
    catch (error)
    {
        logger.error('Failed to establish relation', error);

        await remove(key);

        throw error;
    }
}

export { RelationAlreadyExists };
```

#### Record vs Model Separation

The actual implementation maintains a clear separation between the **Record** (database/storage layer) and the **Model** (domain layer):

- **Record**: `{ id: string | undefined, followerId: string, followingId: string }` — represents the raw database document. The `id` is `undefined` for unestablished relations.
- **Model**: `{ following: Creator, established: boolean, self: boolean }` — represents the domain object presented to callers.

Conversion functions (`_toModel`, `_toModels`) bridge the two layers, fetching related entities (e.g., `Creator`) and computing derived properties (`established`, `self`).

```typescript
// Example: development/social/domain/relation/_toModel/index.ts
import { type TenantId } from '@comify/common/domain/tenant';

import getCreator from '~/creator/getById';

import { type Record, type Relation } from '../definitions';

import createModel from './createModel';

export default async function (tenantId: TenantId, record: Record): Promise<Relation>
{
    const creator = await getCreator(tenantId, record.followingId);

    return createModel(record, creator);
}
```

#### Database Integration

Instead of a repository interface, the actual implementation uses the `database` module from `@comify/common/integrations/database` with methods like `readRecord` and `searchRecords`. Queries use a query statement format:

```typescript
// Example: database query
import database from '@comify/common/integrations/database';

const result = await database.searchRecords<Record>(RECORD_TYPE, {
    followerId: { EQUALS: followerId }
}, undefined, undefined, limit, offset);

return result.records;
```

### Step 4: Exposing Use Cases (Jitar Segments)

There is no separate REST API layer / route file to write. Jitar directly exposes the exported domain functions as remotely callable procedures; the frontend (or another bounded context) calls them like regular async functions (e.g. `import remove from '^/domain/post/remove'`, then `await remove(requester, id)`). What you need to do instead is **register the new use case(s) in the segment configuration** so Jitar knows how (and whether) to expose them:

1. **File location:** `deployment/segments/<context>.<segment>.json` — segments group functions by access pattern, e.g. `social.bff.json` (functions callable from the browser/BFF), `social.reads.json` / `social.writes.json` (internal read/write helpers callable between segments), `social.errors.json` (error classes that must be serializable across segment boundaries).
2. **Access levels:** `"public"` (callable directly from the client), `"protected"` (callable between segments/services but not from the client), `"private"` (not implemented here, reserved for segment-local only).
3. **Public use cases** (the top-level `index.ts` of a use-case directory, e.g. `./social/domain/post/createWithComic`) are registered as `"access": "public"` in the relevant `*.bff.json` segment.
4. **Internal helpers** that perform the actual DB/file reads or writes (e.g. `./social/domain/post/_create/persist`, `./social/domain/post/explore/retrieve`) are registered as `"access": "protected"` in the relevant `*.reads.json` / `*.writes.json` segment so they can run in a separate (e.g. database-adjacent) deployment segment.
5. **Domain-specific error classes** that can be thrown back across a segment boundary (e.g. `PostNotFound`, `InvalidPost`) must be registered in the context's `*.errors.json` segment so Jitar can (de)serialize them correctly.
6. **Authentication, validation, error mapping** all happen inside the domain layer itself (see Step 3) — there is no separate middleware chain per route. Jitar services apply cross-cutting middleware (origin, authentication, tenancy) globally, configured once per service in `deployment/services/**/*.json`.

```json
// Example additions to deployment/segments/social.bff.json
"./social/domain/post/createWithComic": { "default": { "access": "public" } },
"./social/domain/post/getById": { "default": { "access": "public" } }

// Example additions to deployment/segments/social.reads.json
"./social/domain/post/_retrieveById": { "default": { "access": "protected" } }

// Example additions to deployment/segments/social.writes.json
"./social/domain/post/_create/persist": { "default": { "access": "protected" } }

// Example addition to deployment/segments/social.errors.json
"./social/domain/post/_retrieveById/PostNotFound": { "default": {} }
```

### Step 5: Testing

Tests are **integration tests**, not isolated unit tests with mocked collaborators. They run against real `database`, `eventBroker`, and `fileStore` integrations (backed by the Docker services from `AGENTS.md`), connecting once per file and reseeding fixture data before each test. Nothing is mocked with `vi.mock()` in this codebase's domain tests.

1. **File location:** `testing/<context>/domain/<feature>/<use-case>.spec.ts` (mirrors `development/<context>/domain/<feature>/<use-case>`), e.g. `testing/social/domain/post/createWithComic.spec.ts`.
2. **Test naming:** a single top-level `describe('index', () => { it('should <behavior>', async () => { ... }) })` per public use case being tested — the `describe` name is `'index'`, not the use-case name.
3. **Connect/disconnect real integrations** in `beforeAll` / `afterAll`, only for the integrations the use case actually touches (`database`, `eventBroker`, `fileStore`):

```typescript
beforeAll(async () =>
{
    await Promise.all([
        database.connect(),
        eventBroker.connect()
    ]);
});

afterAll(async () =>
{
    await Promise.all([
        database.disconnect(),
        eventBroker.disconnect()
    ]);
});
```

4. **Seed fixture data** in `beforeEach` using the shared seed helpers exported from `testing/<context>/fixtures` (e.g. `seedPosts`, `fullySeedPosts`, `fullySeedCreators`). Fixture records and pre-built `Requester`s (`REQUESTERS.ALICE`, etc.) live in `testing/<context>/fixtures/data/*.fixture.ts`.
5. **Assert against real side effects** — read the record back via `database.readRecord`/`searchRecords`, or assert a rejected promise against a domain error class (`expect(promise).rejects.toThrow(PostNotFound)` or `.rejects.toStrictEqual(new RelationAlreadyExists())`).
6. **Test categories:**
   - **Happy path** — Valid input, record persisted/returned as expected
   - **Error cases** — Domain-specific errors thrown (e.g. `PostNotFound`, `RelationAlreadyExists`)
   - **Authorization/ownership cases** — e.g. a requester who doesn't own a resource cannot modify it
7. **Coverage target:** Aim for high line and branch coverage on use-case logic (`npm run test-coverage`).

```typescript
// Example: testing/social/domain/post/remove.spec.ts
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/events';

import { PostNotFound, RECORD_TYPE, type Record } from '@comify/social/domain/post';
import remove from '@comify/social/domain/post/remove';

import { REQUESTERS, POST_RECORDS, seedPosts } from '../../fixtures';

beforeAll(async () =>
{
    await Promise.all([
        database.connect(),
        eventBroker.connect()
    ]);
});

afterAll(async () =>
{
    await Promise.all([
        database.disconnect(),
        eventBroker.disconnect()
    ]);
});

beforeEach(async () =>
{
    await seedPosts();
});

describe('index', () =>
{
    it('should soft delete a post', async () =>
    {
        await remove(REQUESTERS.ALICE, POST_RECORDS.SECOND.id);

        const result = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: POST_RECORDS.SECOND.id } });

        expect(result.record?.deleted).toBeTruthy();
    });

    it('should not delete a post from another creator', async () =>
    {
        await remove(REQUESTERS.BOB, POST_RECORDS.FIRST.id);

        const result = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: POST_RECORDS.FIRST.id } });

        expect(result.record?.deleted).toBeFalsy();
    });
});
```

### Step 6: Event Publishing (If Applicable)

Shared cross-context event contracts (topic, event name, payload shape, `publish`/`subscribe` functions) live in `development/common/domain/<entity>/<eventName>/` and wrap the `eventBroker` integration (`@comify/common/integrations/events`, itself backed by `@theshelf/events` with a Kafka or in-memory driver). The social (or other context) domain layer only ever imports and calls the already-defined `publish` function for that event — it does not call `eventBroker` directly, and it does not define new event infrastructure per feature.

1. **Shared event module location:** `development/common/domain/<entity>/<eventName>/{definitions,index,publish,subscribe}.ts`, e.g. `development/common/domain/post/added`. `definitions.ts` holds `EVENT_NAME`; the entity-level `../definitions.ts` holds the shared `EVENT_TOPIC` and `EventData` shape for that entity.
2. **Calling from the domain layer:** a dedicated `publish.ts` next to the use-case imports the shared `publish` function (aliased), fills in `contextId` (the bounded context's `CONTEXT_ID`), `principalId`, `tenantId`, and the entity-specific fields, and is invoked **after** the state-changing persistence step — it is awaited, not fire-and-forget.
3. **Event naming:** past-tense, domain-language (`added`, `removed`, `established`, `unestablished`), scoped under an entity topic (`common.post`, `common.relation`).
4. **Compensating action on failure** — if publishing fails, the use case logs the error, **rolls back** the just-applied state change (e.g. delete the just-created record, or flip `deleted` back to `false`), and re-throws the error. This is the opposite of "fire-and-forget": the call is awaited and its failure is treated as the whole use case failing.

```typescript
// Example: development/social/domain/post/_create/publish.ts
import { publish as publishPostAdded } from '@comify/common/domain/post/added';
import { type TenantId } from '@comify/common/domain/tenant';
import { type Identifier } from '@comify/common/primitives/identifier';

import { CONTEXT_ID } from '~/definitions';

export default async function (tenantId: TenantId, principalId: Identifier, postId: Identifier, parentId?: Identifier): Promise<void>
{
    return publishPostAdded({
        contextId: CONTEXT_ID,
        principalId,
        tenantId,
        postId,
        parentId
    });
}
```

```typescript
// Example: development/social/domain/post/_create/index.ts — awaited publish with compensating rollback
export default async function (requester: Requester, data: CreateData): Promise<Identifier>
{
    validate(data);

    const record = createRecord(requester.tenantId, data.creatorId, data.comicId, data.commentId, data.parentId);

    const postId = await persist(record);

    try
    {
        await publish(requester.tenantId, requester.principalId, record.id, record.parentId);

        return postId;
    }
    catch (error)
    {
        logger.error('Failed to create post', error);

        await remove(postId);

        throw error;
    }
}
```

## Checklist

Before marking the feature as complete, verify:

- [ ] Domain models are well-typed with full TypeScript strict mode compliance, with a clear `Record` (storage) vs. domain model (e.g. `Post`, `Relation`) split
- [ ] All use-case functions make side effects (DB, file store, event publishing) explicit via small, composed helper functions (`_create`, `_retrieveById`, `persist`, `publish`, etc.)
- [ ] Domain-specific error types extend `@comify/common/integrations/errors` (`BadRequest`, `NotFound`, `ValidationError`) instead of generic errors
- [ ] New public use cases (and any protected helpers/errors they need) are registered in the relevant `deployment/segments/<context>.*.json` files with the correct `access` level
- [ ] Tests are added under `testing/<context>/domain/<feature>/<use-case>.spec.ts`, using real `database`/`eventBroker`/`fileStore` connections and fixture seed helpers, covering happy path, domain-error cases, and ownership/authorization cases
- [ ] State-changing use cases that publish an event await the publish and roll back (compensate) on failure rather than firing-and-forgetting
- [ ] Code follows project conventions: single quotes, no semicolons, inline type imports, import ordering, `RECORD_TYPE` export per Record type
- [ ] `npm run test` (and `npm run lint`) pass for the affected workspace

## Common Pitfalls

1. **Hidden side effects** — Keep DB calls, file store calls, and event publishing in their own small named functions (`persist`, `publish`, `retrieve`) composed by the use case's `index.ts`, rather than inlined ad hoc.
2. **Generic error handling** — Use domain-specific error classes (extending `BadRequest`/`NotFound`/`ValidationError`) for clarity and correct segment (de)serialization.
3. **Tight coupling between contexts** — Respect bounded context boundaries; cross-context communication goes through the shared `development/common/domain/<entity>/<event>` event contracts, not direct imports between `social`/`insights`/`moderation` domains.
4. **Forgetting segment registration** — A new public use case or a newly extracted protected helper that isn't added to the right `deployment/segments/*.json` file won't be callable (or won't run in the intended segment) even though the code compiles and local tests pass.
5. **Treating event publishing as fire-and-forget** — In this codebase, failed event publishing after a persisted change must trigger a compensating rollback and a re-thrown error, not a silently swallowed failure.
6. **Mocking in domain tests** — Domain `.spec.ts` tests connect to real `database`/`eventBroker`/`fileStore` integrations and reseed fixtures; don't introduce `vi.mock()` for these, follow the existing integration-test pattern instead.
7. **Semicolons or double quotes** — Enforce the project's formatting rules via ESLint; do not manually override.

## References

- [Project AGENTS.md](../../../AGENTS.md) — Full project conventions and setup
- [testing/social/domain-tests.md](../../../testing/social/domain-tests.md) — Documented behavior of existing social domain tests
- [@theshelf/validation](https://www.npmjs.com/package/@theshelf/validation) — Validation library (wrapped by `@comify/common/integrations/validation`)
- [@theshelf/events](https://www.npmjs.com/package/@theshelf/events) — Event publishing via Kafka/in-memory driver (wrapped by `@comify/common/integrations/events`)
- [@theshelf/authentication](https://www.npmjs.com/package/@theshelf/authentication) — Keycloak/OIDC authentication
- [Jitar](https://jitar.dev) — Distributed runtime responsible for exposing domain functions as remote procedures via segment configuration
- [Vitest documentation](https://vitest.dev/) — Testing framework
