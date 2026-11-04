---
name: domain-testing
description: Write integration tests for domain use cases (testing/<context>/domain/**/*.spec.ts) in a Comify bounded context. Use when adding, extending, or improving coverage for domain-layer tests.
---

# Domain Testing

## Overview

Guides writing **integration tests, not isolated unit tests**, for domain use cases within a bounded context in the Comify project (`social`, `insights`, `moderation`, etc.). Tests run against real `database`, `eventBroker`, `fileStore` and `http` integrations (backed by in-memory/mapped drivers in the test environment) and reseed fixture data before each test — nothing is mocked with `vi.mock()`. This is the testing counterpart to the `domain-implementation` skill (see [`../domain-implementation/SKILL.md`](../domain-implementation/SKILL.md)) and documents the exact conventions already used by the ~20 spec files under `testing/social/domain`. Formatting (quotes, semicolons, import ordering) follows the repository root [`AGENTS.md`](../../../AGENTS.md).

## When to Use

Invoke this skill when:
- A new public use case was added under `development/<context>/domain/<feature>/<useCase>` and needs a corresponding `.spec.ts`
- An existing use case gained new branches (validation rule, error case, ownership check) that need test coverage
- You need to add or extend fixture data to support a new test scenario
- You are asked to improve coverage on an existing domain feature

> **Scope:** This skill covers `testing/<context>/domain/**/*.spec.ts` only. UI/component tests are out of scope (see `app-implementation`); it does not cover implementing the use case itself (see `domain-implementation`).

## Prerequisites

Before writing tests, ensure you have:

1. **The use case already implemented** — its `index.ts`, exported error classes, and `RECORD_TYPE`/`Record` type are in place under `development/<context>/domain/<feature>`.
2. **Knowledge of which integrations it touches** — look at the use case's imports: does it call `database` (directly or via `~/integrations`), `eventBroker` (via a `publish.ts` helper), or `fileStore`/`http` (via image creation/download)?
3. **Familiarity with the available fixtures** — `testing/<context>/fixtures` (shared across the context) and, if present, a feature-local `testing/<context>/domain/<feature>/fixtures` folder for data the shared fixtures don't cover.

## Test File Anatomy

### File location & naming

- **Location:** `testing/<context>/domain/<feature>/<use-case>.spec.ts` — mirrors `development/<context>/domain/<feature>/<use-case>`, but as a **flat file**, not a directory (e.g. `development/social/domain/post/remove/index.ts` → `testing/social/domain/post/remove.spec.ts`).
- **One spec file per public use case.** Internal helpers (`_create`, `_toModel`, etc.) are exercised indirectly through the public use case's tests, except where a helper is directly imported and tested in isolation (e.g. `testing/social/domain/notification/create.spec.ts` imports `@comify/social/domain/notification/_create` directly because that helper has no separate public wrapper used standalone).
- **Describe block:** always a single top-level `describe('index', () => { ... })` — the literal string `'index'`, never the use-case name:

```typescript
describe('index', () =>
{
    it('should create a post', async () =>
    {
        // ...
    });
});
```

- **Imports are grouped and ordered** exactly like production code: external (`vitest`) → `@theshelf/*`/`@comify/*` (alphabetized, blank line between distinct groups) → the use case + its domain types → relative fixtures import last. A blank line (empty first line) opens every file, matching the rest of the codebase.

```typescript
// Pattern observed across every spec file
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/events';

import { PostNotFound, RECORD_TYPE, type Record } from '@comify/social/domain/post';
import remove from '@comify/social/domain/post/remove';

import { REQUESTERS, POST_RECORDS, seedPosts } from '../../fixtures';
```

### Connecting real integrations

Connect **only** the integrations the use case under test actually exercises, in `beforeAll`, and tear them down in `afterAll`. Decide which ones to include by tracing the use case's dependencies:

| Use case touches... | Connect |
|---|---|
| Reads/writes records (almost always) | `database` |
| Publishes a domain event (`publish.ts` helper) | `eventBroker` |
| Creates/downloads/reads images | `fileStore` |
| Downloads from an external URL | `fileStore` (the mapped `http` driver is seeded via fixtures, not connected explicitly) |

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

When only one integration is needed, skip `Promise.all` entirely:

```typescript
beforeAll(async () =>
{
    await database.connect();
});

afterAll(async () =>
{
    await database.disconnect();
});
```

### Seeding fixture data

Reseed fixture data in `beforeEach` using the helpers exported from `testing/<context>/fixtures` (barrel of `data/` + `setup/`). Prefer the **narrowest** seed helper(s) that satisfy the use case's preconditions:

| Helper | Seeds |
|---|---|
| `seedCreators()`, `seedPosts()`, `seedRatings()`, `seedRelations()`, `seedNotifications()`, `seedComics()`, `seedComments()`, `seedCreatorMetrics()`, `seedPostMetrics()`, `seedImages()` | A single record type (granular) |
| `fullySeedCreators()` | Creators + Creator Metrics + Relations |
| `fullySeedPosts()` | `fullySeedCreators()` + Images + Comics + Comments + Posts + Post Metrics + Ratings |
| `fullySeedNotifications()` | `fullySeedPosts()` + Notifications |

```typescript
beforeEach(async () =>
{
    await seedPosts();
});

// or combine multiple independent seeds:
beforeEach(async () =>
{
    await Promise.all([
        seedPosts(),
        seedRatings()
    ]);
});
```

Some use cases need **no** seeding at all (stateless creation from arbitrary input, e.g. `post.comic/create.spec.ts`, `post.comment/create.spec.ts`) — in that case omit `beforeEach` entirely.

### Feature-local fixtures

When the shared `testing/<context>/fixtures` data isn't enough (e.g. malformed/edge-case input values, or mocked HTTP responses specific to one feature), add a **feature-local fixtures folder** next to the spec files, mirroring `testing/social/domain/image/fixtures/`:

```
testing/social/domain/image/fixtures/
├── data.fixture.ts     # URLs / data URLs / mock Response objects specific to image tests
├── setup.fixture.ts    # seedImages(): configures the mapped http driver
└── index.ts            # export * from './data.fixture'; export * from './setup.fixture';
```

```typescript
// testing/social/domain/image/fixtures/setup.fixture.ts
import { HttpMethods } from '@theshelf/http';
import type { MappedDriver } from '@theshelf/http';

import { driver } from '@comify/common/integrations/http';

import { URLS, RESPONSES } from './data.fixture';

export function seedImages(): void
{
    const mappedDriver = driver as MappedDriver;

    mappedDriver.clear();

    mappedDriver.setMapping(HttpMethods.HEAD, URLS.VALID.toString(), RESPONSES.VALID);
    mappedDriver.setMapping(HttpMethods.GET, URLS.VALID.toString(), RESPONSES.VALID);
    mappedDriver.setMapping(HttpMethods.HEAD, URLS.INVALID_TYPE.toString(), RESPONSES.INVALID_TYPE);
    mappedDriver.setMapping(HttpMethods.HEAD, URLS.INVALID_SIZE.toString(), RESPONSES.INVALID_SIZE);
    mappedDriver.setMapping(HttpMethods.HEAD, URLS.NONEXISTING.toString(), RESPONSES.NONEXISTING);
}
```

Import feature-local fixtures with a relative `./fixtures` path, and shared fixtures with `../../fixtures`, never mixing the two re-export surfaces.

### Shared fixture data conventions (when extending `testing/<context>/fixtures`)

If a new feature needs fixture **records** that other tests could also reuse (not one-off edge-case values), extend the shared fixtures instead of duplicating data locally:

1. Add/extend a `testing/<context>/fixtures/data/<entity>.fixture.ts` exporting a `Record<string, RecordShape>` keyed by scenario name (e.g. `ALICE`, `FIRST`, `BOB_ALICE`), re-exported from `testing/<context>/fixtures/data/index.ts`.
2. Add a `seed<Entity>()` function to `testing/<context>/fixtures/setup/database.fixture.ts` using the shared `seed(type, records)` helper (which deletes all existing records of that type, then recreates them from `Object.values(...)`), and re-export it from `testing/<context>/fixtures/setup/index.ts`.
3. If the new entity should be part of an existing composite helper (`fullySeedPosts`, etc.), add it there too — composites always run their sub-seeds via `Promise.all`.
4. If you need a `Requester`, don't hand-roll one — `REQUESTERS` is derived automatically from `CREATOR_RECORDS` keys (`{ principalId: record.id, tenantId: record.tenantId }`), so adding a creator fixture automatically gives you `REQUESTERS.<KEY>`.

## Writing Assertions

### Happy path — assert the real side effect, not the return value alone

Read the record back from `database` (or the file from `fileStore`) rather than trusting only the use case's return value:

```typescript
it('should create a post', async () =>
{
    const id = await createWithComic(REQUESTERS.ALICE, { imageDataUrl: IMAGE_DATA_URLS.COMIC });

    const result = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } });

    expect(result.record).toBeDefined();
    expect(result.record?.creatorId).toBe(REQUESTERS.ALICE.principalId);
    expect(result.record?.comicId).toBeDefined();
    expect(result.record?.createdAt).toBeDefined();
});
```

For list/query use cases, assert both length and ordering explicitly (most domain lists are sorted by recency):

```typescript
it('should get posts from everyone followed by the requester', async () =>
{
    const posts = await getByFollowing(REQUESTERS.CHARLIE, { offset: 0, limit: 7 });

    expect(posts).toHaveLength(2);
    expect(posts[0].id).toBe(POST_RECORDS.SECOND.id);
    expect(posts[1].id).toBe(POST_RECORDS.FIRST.id);
});
```

### Error cases — pick the right matcher

- Use `.rejects.toThrow(ErrorClass)` when only the error **type** matters:

```typescript
const promise = remove(REQUESTERS.HENRY, POST_RECORDS.DELETED.id);

await expect(promise).rejects.toThrow(PostNotFound);
```

- Use `.rejects.toStrictEqual(new ErrorClass(...))` when the error carries **data** that must also match (e.g. validation message maps), or when you want an exact-instance check:

```typescript
const messages = new Map([['mimeType', 'Invalid mime type']]);

const promise = create('invalid_type', DATA_URLS.INVALID_TYPE);

await expect(promise).rejects.toStrictEqual(new InvalidImage(messages));
```

```typescript
const promise = establish(REQUESTERS.BOB, CREATOR_RECORDS.ALICE.id);

await expect(promise).rejects.toStrictEqual(new RelationAlreadyExists());
```

### Authorization / ownership cases — assert the *absence* of a side effect

When a requester doesn't own the resource, the use case typically resolves silently (the mutation is skipped) rather than throwing — assert the record is **unchanged**:

```typescript
it('should not delete a post from another creator', async () =>
{
    await remove(REQUESTERS.BOB, POST_RECORDS.FIRST.id);

    const result = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: POST_RECORDS.FIRST.id } });

    expect(result.record?.deleted).toBeFalsy();
});
```

## Test Categories Checklist (per use case)

For every public use case being tested, cover as many of the following as apply:

- [ ] **Happy path** — valid input produces the expected persisted/returned result
- [ ] **Validation errors** — invalid input (too long, malformed, wrong type/size) throws the domain-specific error
- [ ] **Not-found errors** — operating on a non-existent or already soft-deleted record throws the `*NotFound` error
- [ ] **Duplicate/conflict errors** — creating something that already exists throws the `*AlreadyExists` error
- [ ] **Ownership/authorization** — a requester who doesn't own the resource cannot mutate it (and no error is thrown unless the domain defines one)
- [ ] **Exclusion/filtering behavior** — e.g. recommended posts exclude the requester's own posts, following lists only include relevant tenants
- [ ] **Ordering/pagination** — list results come back in the documented order (usually most-recent-first) and respect `limit`/`offset`
- [ ] **Search/partial-match behavior** — for use cases that accept a search term, cover no-match, full-name match, nickname match, and partial/split-name match as applicable

Not every use case needs every category — match the categories to the branches actually present in the implementation (see the use case's `index.ts` and its helper files for the branches to cover).

## Worked Example

This is a **fictional** illustration using a hypothetical `creator.badge` feature (not an existing path in the repo) to show how the pieces fit together — a use case `development/social/domain/creator.badge/award/index.ts` that awards a badge to a creator, owned by `requester`, and throws `BadgeAlreadyAwarded` on a duplicate:

```typescript

import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/events';

import { RECORD_TYPE, type Record } from '@comify/social/domain/creator.badge';
import award, { BadgeAlreadyAwarded } from '@comify/social/domain/creator.badge/award';

import { REQUESTERS, seedCreatorBadges } from '../../fixtures';

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
    await seedCreatorBadges();
});

describe('index', () =>
{
    it('should award a badge to a creator', async () =>
    {
        await award(REQUESTERS.ALICE, 'early-adopter');

        const result = await database.readRecord<Record>(RECORD_TYPE, {
            creatorId: { EQUALS: REQUESTERS.ALICE.principalId },
            badge: { EQUALS: 'early-adopter' }
        });

        expect(result.record).toBeDefined();
    });

    it('should NOT award a duplicate badge', async () =>
    {
        const promise = award(REQUESTERS.BOB, 'top-commenter');

        await expect(promise).rejects.toStrictEqual(new BadgeAlreadyAwarded());
    });
});
```

> This is illustrative only — before writing a real test, always read the real `index.ts`, its helpers, and its exported error classes for the use case under test, and seed/assert against **its** actual signature and behavior rather than assuming the shape shown here.

## Running & Validating Tests

```bash
# Run the full test suite
npm run test

# Run only social domain tests
npm run test -- testing/social/domain/

# Run a single feature's tests
npm run test -- testing/social/domain/post/

# Run a single spec file
npm run test -- testing/social/domain/post/remove.spec.ts

# Check coverage
npm run test-coverage
```

Always run the affected spec file(s) after writing or changing a test, and run `npm run lint` on the touched workspace (`testing/<context>`) to confirm import ordering, quote style, and formatting rules are satisfied.

## Checklist

Before marking test coverage complete, verify:

- [ ] Spec file is placed at `testing/<context>/domain/<feature>/<use-case>.spec.ts`, mirroring the use case's directory under `development/<context>/domain/<feature>/<use-case>`
- [ ] A single `describe('index', () => { ... })` wraps all `it` blocks
- [ ] Only the integrations the use case actually touches are connected/disconnected (`database`, `eventBroker`, `fileStore`)
- [ ] Fixtures are reseeded in `beforeEach` using the narrowest applicable shared seed helper(s), or a feature-local `fixtures/` folder when shared data doesn't cover the scenario
- [ ] Happy path assertions read back real state via `database.readRecord`/`searchRecords` (or `fileStore.readFile`), not just the use case's return value
- [ ] Error cases use `.rejects.toThrow(ErrorClass)` for type-only checks or `.rejects.toStrictEqual(new ErrorClass(...))` when error data matters
- [ ] Ownership/authorization branches are covered by asserting the resource is unchanged for non-owners
- [ ] List-returning use cases assert both length and element ordering
- [ ] No `vi.mock()` is used for `database`/`eventBroker`/`fileStore`/`http` — only the mapped/memory drivers already wired up for the test environment
- [ ] Code follows the formatting rules in `AGENTS.md` (single quotes, semicolons, Allman braces, inline type imports, import ordering, blank line after imports)
- [ ] `npm run test` (and `npm run lint`) pass for the affected workspace

## Common Pitfalls

1. **Wrong `describe` name** — it must be `'index'`, not the use-case or feature name; this is a hard convention across every existing spec file.
2. **Over-seeding** — pulling in `fullySeedPosts()` when a narrower `seedCreators()`/`seedPosts()` would do makes tests slower and obscures what the test actually depends on.
3. **Connecting unused integrations** — only connect what the use case under test touches; e.g. a pure read from `database` doesn't need `eventBroker.connect()`.
4. **Trusting the return value only** — always read the record back (or query related records) to prove the side effect actually happened, especially for void-returning use cases like `remove`/`establish`.
5. **Using `toThrow` when the error carries data** — validation errors like `InvalidImage(messages)` need `toStrictEqual(new InvalidImage(messages))` to actually verify the message map, not just the error type.
6. **Mocking collaborators** — don't introduce `vi.mock()` for `database`/`eventBroker`/`fileStore`/`http`; use the existing fixture/seed pattern against the real (in-memory/mapped) drivers instead.
7. **Forgetting ordering assertions** — a list test that only checks `toHaveLength(n)` without checking element order/identity can silently hide a broken sort.
8. **Duplicating fixture data inline** — reuse `testing/<context>/fixtures` (or a feature-local `fixtures/` folder for truly feature-specific edge cases) instead of hardcoding new records inside the spec file.

## References

- [`.agents/skills/domain-implementation/SKILL.md`](../domain-implementation/SKILL.md) — Step 5 "Testing" section this skill expands on, plus the full use-case implementation conventions these tests exercise
- [Project AGENTS.md](../../../AGENTS.md) — Full project conventions and setup
- [testing/social/domain-tests.md](../../../testing/social/domain-tests.md) — Documented behavior of existing social domain tests (categories, fixtures, error types)
- [testing/social/fixture-data.md](../../../testing/social/fixture-data.md) — Full reference of the shared fixture data model and relationships
- [Vitest documentation](https://vitest.dev/) — Testing framework (`describe`/`it`/`beforeAll`/`beforeEach`/`expect`)
