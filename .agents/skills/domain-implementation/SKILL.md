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
2. **Establish validation rules** using `@theshelf/validation` or custom validators.
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

1. **File location:** `development/<context>/domain/<feature>/<use-case>/index.ts` — each use case gets its own **directory** with an `index.ts` as the public entry point.
2. **Naming (public use cases):** PascalCase directory names (`establish`, `explore`, `get`, `getFollowers`, `getFollowing`, `getMany`).
3. **Naming (internal helpers):** `_camelCase` subdirectories for private/internal helpers (`_retrieve`, `_toModel`, `_toModels`, `_translateMany`, `_retrieveFollowing`).
4. **Pure functions** where possible; side effects (DB, external APIs) should be explicit and isolated.
5. **Error handling:** Domain-specific error classes extending `@comify/common/integrations/errors` types (e.g., `BadRequest`, `NotFound`).
6. **Type imports** inline: `import type { Post } from '../types'`
7. **Single quotes**, no semicolons.

```typescript
// Example: development/social/domain/establish/index.ts
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
// Example: development/social/domain/_toModel/index.ts
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

### Step 4: API Layer (If Applicable)

1. **File location:** `development/<context>/app/api/<resource>.ts`
2. **Route definitions** using the Jitar HTTP plugin (`@jitar-plugins/http`).
3. **Middleware chain:** Authentication → Validation → Domain call → Response serialization.
4. **Error mapping:** Convert domain errors to appropriate HTTP status codes.

```typescript
// Example: development/social/app/api/posts.ts
import { post } from '@jitar-plugins/http';
import { authenticate } from '@theshelf/authentication';
import { validate } from '@theshelf/validation';
import { createPost } from '../../domain/create';

export const postRoutes = [
  post('/api/posts', authenticate, validate, async (request) => {
    const payload = request.body as CreatePostPayload;
    const post = await createPost(payload, getPostRepository());
    return { status: 201, body: post };
  }),
];
```

### Step 5: Testing

1. **File location:** `testing/<context>/<feature>/<use-case>.spec.ts`
2. **Test naming:** `describe('<use-case>', () => { it('should <behavior>', () => { ... }) })`
3. **Mock external dependencies** using `vi.mock()` for:
   - Keycloak authentication
   - MongoDB repository
   - SeaweedFS file storage
   - Kafka event publishing
4. **Test categories:**
   - **Happy path** — Valid input, expected output
   - **Error cases** — Invalid input, repository failures, constraint violations
   - **Edge cases** — Empty collections, boundary values, race conditions
5. **Coverage target:** Aim for high line and branch coverage on use-case logic.

```typescript
// Example: testing/social/create.spec.ts
import { describe, it, expect, vi } from 'vitest';
import { createPost } from '../../development/social/domain/create';
import type { PostRepository } from '../../development/social/domain/repositories';

vi.mock('@common/utils', () => ({
  generateId: () => 'mocked-id-123',
}));

describe('createPost', () => {
  it('should create a post with valid payload', async () => {
    const mockRepo: PostRepository = {
      save: vi.fn().mockResolvedValue(undefined),
    };

    const payload = {
      authorId: 'user-1',
      imageUrl: 'https://example.com/image.jpg',
      bubbles: [{ text: 'Hello', position: { x: 10, y: 20 } }],
    };

    const result = await createPost(payload, mockRepo);

    expect(result.id).toBe('mocked-id-123');
    expect(result.authorId).toBe('user-1');
    expect(mockRepo.save).toHaveBeenCalledTimes(1);
  });
});
```

### Step 6: Event Publishing (If Applicable)

1. **File location:** Same as the use-case or a dedicated event module.
2. **Use `@theshelf/events`** for publishing domain events to Kafka.
3. **Event naming:** Past-tense, domain-language (`PostCreated`, `RatingToggled`, `CommentAdded`).
4. **Fire-and-forget** — Don't block the primary use-case on event publishing; handle failures gracefully.

```typescript
// Example: development/social/domain/events.ts
import { publishEvent } from '@theshelf/events';

export async function publishPostCreated(post: Post): Promise<void> {
  await publishEvent('posts.created', {
    postId: post.id,
    authorId: post.authorId,
    imageUrl: post.imageUrl,
    timestamp: post.createdAt,
  });
}
```

## Checklist

Before marking the feature as complete, verify:

- [ ] Domain models are well-typed with full TypeScript strict mode compliance
- [ ] All use-case functions are pure or explicitly handle side effects
- [ ] Domain-specific error types are used instead of generic errors
- [ ] API endpoints (if any) include authentication, validation, and error mapping
- [ ] Frontend components/hooks (if any) use React 19 patterns
- [ ] Tests cover happy path, error cases, and edge cases
- [ ] External dependencies (Keycloak, MongoDB, SeaweedFS, Kafka) are properly mocked in tests
- [ ] Event publishing (if any) follows the fire-and-forget pattern
- [ ] Code follows project conventions: single quotes, no semicolons, inline type imports, import ordering
- [ ] Feature is documented in the relevant bounded context's README

## Common Pitfalls

1. **Impure functions with implicit side effects** — Always make DB calls, API calls, and event publishing explicit in the function signature.
2. **Generic error handling** — Use domain-specific error classes for clarity and better debugging.
3. **Tight coupling between contexts** — Respect bounded context boundaries; communicate via events, not direct calls.
4. **Missing test mocks** — Never test against real external services; always mock Keycloak, MongoDB, SeaweedFS, and Kafka.
5. **Skipping validation** — Validate all inputs at the API boundary and within use-case functions.
6. **Semicolons or double quotes** — Enforce the project's formatting rules via ESLint; do not manually override.

## References

- [Project AGENTS.md](../../AGENTS.md) — Full project conventions and setup
- [@theshelf/validation](https://www.npmjs.com/package/@theshelf/validation) — Validation library
- [@theshelf/events](https://www.npmjs.com/package/@theshelf/events) — Event publishing via Kafka
- [@theshelf/authentication](https://www.npmjs.com/package/@theshelf/authentication) — Keycloak/OIDC authentication
- [Vitest documentation](https://vitest.dev/) — Testing framework
