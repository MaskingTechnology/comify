# Social Context Fixture Data Documentation

## Overview

This documentation describes the fixture data used for testing the social features of Comify. The fixtures are located in `testing/social/fixtures/data` and provide comprehensive test data covering creators, content, social interactions, and multi-tenancy scenarios.

### Purpose

The fixture data serves as:
- **Test Data**: Pre-defined, deterministic data for unit and integration tests
- **Type Safety**: TypeScript exports ensure compile-time type checking
- **Realistic Scenarios**: Multiple creators, tenants, and interaction patterns for realistic test coverage

### Module Organization

All fixtures are re-exported through `testing/social/fixtures/data/index.ts`, allowing single-import access:

```typescript
import { CREATOR_RECORDS, POST_RECORDS, TENANTS } from '@comify/social/fixtures/data';
```

---

## Data Entities

### 1. Tenants

**File**: `tenants.fixture.ts`

Defines the multi-tenant environments for testing tenant isolation.

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique tenant identifier (e.g., "ABCD", "EFGH") |
| `origin` | `string` | Tenant's domain origin URL |

**Fixture Records**:

| Key | ID | Origin |
|-----|-----|--------|
| `ABCD` | `ABCD` | `https://abcd.example.com` |
| `EFGH` | `EFGH` | `https://efgh.example.com` |

---

### 2. Creators

**File**: `creators.fixture.ts`

Represents user/creator accounts within the social system.

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | UUID for the creator |
| `fullName` | `string` | Full display name |
| `nickname` | `string` | Unique nickname/handle |
| `email` | `string` | Email address |
| `tenantId` | `string` | Reference to tenant |
| `joinedAt` | `string (ISO)` | Account creation timestamp |

**Fixture Records**:

| Key | Full Name | Nickname | Email | Tenant | Joined |
|-----|-----------|----------|-------|--------|--------|
| `ALICE` | Alice Anderson | alicea | alice@example.com | ABCD | 2024-06-23 |
| `BOB` | Bob Baker | bobthegreat | bob@example.com | ABCD | 2024-06-24 |
| `CHARLIE` | Charlie Castillo | charliecastillo | charlie@example.com | ABCD | 2024-07-06 |
| `DAVID` | David Diaz | diazdavid | david@example.com | ABCD | 2024-08-15 |
| `EVE` | Eve Edwards | sundayeve | eve@example.com | EFGH | 2024-05-15 |
| `FELIX` | Felix Fischer | felixer | felix@example.com | EFGH | 2024-06-08 |
| `GEORGE` | George Gomez | gogogomez | george@example.com | EFGH | 2024-06-10 |
| `HENRY` | Henry Higgins | henryhiggens | henry@example.com | EFGH | 2024-08-11 |

---

### 3. Creator Metrics

**File**: `creator.metrics.fixture.ts`

Tracks aggregated statistics for creators.

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | UUID for the metrics record |
| `creatorId` | `string` | Reference to creator |
| `posts` | `number` | Number of posts |
| `followers` | `number` | Number of followers |
| `following` | `number` | Number of creators followed |
| `popularity` | `number` | Calculated popularity score |

---

### 4. Identities

**File**: `identities.fixture.ts`

Authentication identity information derived from creators.

| Property | Type | Description |
|----------|------|-------------|
| `name` | `string` | Full name (from creator) |
| `nickname` | `string` | Nickname (from creator) |
| `email` | `string` | Email (from creator) |
| `picture` | `string \| undefined` | Profile picture URL |
| `email_verified` | `boolean` | Email verification status |

---

### 5. Images

**File**: `images.fixture.ts`

Manages media storage for profile pictures and comics.

#### Storage Keys

| Key | Storage Key | Purpose |
|-----|-------------|---------|
| `PROFILE` | `profile/1` | Profile picture storage |
| `COMIC` | `comic/1` | Comic image storage |

#### Data URLs (Base64 Encoded)

| Key | Data URL |
|-----|----------|
| `PROFILE` | `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR42mL8//8/AyUYIIgBh` |
| `COMIC` | `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=` |

#### Image Records

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | UUID for the image |
| `storageKey` | `string` | Storage location key |
| `filename` | `string` | Original filename |
| `mimeType` | `string` | MIME type (e.g., `image/png`) |
| `size` | `number` | File size in bytes |

---

### 6. Posts

**File**: `posts.fixture.ts`

Represents user-generated comic content.

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | UUID for the post |
| `creatorId` | `string` | Reference to creator |
| `comicId` | `string` | Reference to comic data |
| `parentId` | `string \| undefined` | Reference to parent post (for reactions/comments) |
| `commentId` | `string \| undefined` | Reference to comment (for reactions) |
| `tenantId` | `string` | Tenant reference for isolation |
| `createdAt` | `string (ISO)` | Creation timestamp |
| `deleted` | `boolean` | Soft delete flag |

**Primary Posts**:

| Key | Creator | Tenant | Created | Deleted |
|-----|---------|--------|---------|---------|
| `FIRST` | ALICE | ABCD | 2024-06-23 | No |
| `SECOND` | ALICE | ABCD | 2024-07-26 | No |
| `THIRD` | CHARLIE | ABCD | 2024-08-08 | No |
| `FOURTH` | DAVID | ABCD | 2024-08-12 | No |
| `FIFTH` | EVE | EFGH | 2024-06-02 | No |
| `SIXTH` | FELIX | EFGH | 2024-06-08 | No |
| `SEVENTH` | GEORGE | EFGH | 2024-07-15 | No |
| `DELETED` | HENRY | EFGH | 2024-08-03 | **Yes** |

**Reaction Posts** (sub-posts):

| Key | Parent | Creator | Notes |
|-----|--------|---------|-------|
| `COMIC` | FIRST | BOB | Comic reaction |
| `COMMENT` | FIRST | CHARLIE | Comment reaction |
| `DELETED` | FIFTH | GEORGE | Deleted reaction |

---

### 7. Comics

**File**: `post.comics.fixture.ts`

Stores comic-specific data (images).

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | UUID for the comic |
| `imageId` | `string` | Reference to image storage |

---

### 8. Comments

**File**: `post.comments.fixture.ts`

Stores comment content on posts.

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | UUID for the comment |
| `message` | `string` | Comment text content |

---

### 9. Post Metrics

**File**: `post.metrics.fixture.ts`

Aggregated content engagement statistics.

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | UUID for the metrics record |
| `postId` | `string` | Reference to post |
| `ratings` | `number` | Total number of ratings |
| `reactions` | `number` | Total number of reactions |
| `popularity` | `number` | Calculated popularity score |

**Post Metrics**:

| Key | Post ID | Ratings | Reactions |
|-----|---------|---------|-----------|
| `FIRST` | 1bb1... | 3 | 2 |
| `SECOND` through `SEVENTH` | Various | 0 | 0 |
| `DELETED` | 78c2... | 0 | 0 |

**Reaction Metrics**:

| Key | Post ID | Ratings | Reactions |
|-----|---------|---------|-----------|
| `COMIC` | 2f7a... | 0 | 0 |
| `COMMENT` | 8804... | 0 | 0 |
| `DELETED` | ebfa... | 0 | 0 |

---

### 10. Ratings

**File**: `post.ratings.fixture.ts`

Individual user ratings on posts.

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | UUID for the rating |
| `creatorId` | `string` | Rating provider |
| `postId` | `string` | Rated post |
| `createdAt` | `string (ISO)` | Rating timestamp |

**Fixture Records**:

| Key | Creator | Post | Date |
|-----|---------|------|------|
| `BOB_FIRST` | BOB | FIRST | 2024-06-25 |
| `CHARLIE_FIRST` | CHARLIE | FIRST | 2024-07-25 |
| `DAVID_FIRST` | DAVID | FIRST | 2024-08-25 |

---

### 11. Notifications

**File**: `notifications.fixture.ts`

Event notifications for social interactions.

**Notification Types**:
- `Types.STARTED_FOLLOWING` - A creator started following another
- `Types.RATED_POST` - A creator rated another's post
- `Types.REACTED_TO_POST` - A creator reacted to another's post

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | UUID for the notification |
| `type` | `string` | Notification type enum |
| `senderId` | `string` | Actor who performed the action |
| `receiverId` | `string` | Recipient (content owner) |
| `postId` | `string \| undefined` | Related post (for rating/reaction) |
| `createdAt` | `string (ISO)` | Event timestamp |
| `deleted` | `boolean` | Soft delete flag |

**Following Notifications**:

| Key | Sender | Receiver | Date |
|-----|--------|----------|------|
| `BOB_FOLLOWING_ALICE` | BOB | ALICE | 2024-06-25 |
| `BOB_FOLLOWING_DAVID` | BOB | DAVID | 2024-07-25 |
| `CHARLIE_FOLLOWING_ALICE` | CHARLIE | ALICE | 2024-06-25 |
| `DAVID_FOLLOWING_BOB` | DAVID | BOB | 2024-07-25 |

**Rating Notifications**:

| Key | Sender | Post Owner | Post | Date |
|-----|--------|-----------|------|------|
| `BOB_RATED_FIRST` | BOB | ALICE | FIRST | 2024-06-25 |
| `CHARLIE_RATED_FIRST` | CHARLIE | ALICE | FIRST | 2024-06-25 |
| `DAVID_RATED_FIRST` | DAVID | ALICE | FIRST | 2024-06-25 |

**Reaction Notifications**:

| Key | Sender | Post Owner | Post | Date | Deleted |
|-----|--------|-----------|------|------|---------|
| `BOB_REACTED_TO_FIRST` | BOB | ALICE | FIRST | 2024-05-24 | No |
| `CHARLIE_REACTED_TO_FIRST` | CHARLIE | ALICE | FIRST | 2024-06-07 | No |
| `GEORGE_REACTED_TO_FIFTH` | GEORGE | EVE | FIFTH | 2024-07-18 | **Yes** |

---

### 12. Relations

**File**: `relations.fixture.ts`

Defines following relationships between creators.

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | UUID for the relation |
| `followerId` | `string` | Creator who follows |
| `followingId` | `string` | Creator being followed |

**Fixture Records**:

| Key | Follower | Following |
|-----|----------|-----------|
| `BOB_ALICE` | BOB | ALICE |
| `BOB_DAVID` | BOB | DAVID |
| `CHARLIE_ALICE` | CHARLIE | ALICE |
| `DAVID_BOB` | DAVID | BOB |

---

### 13. Requesters

**File**: `requesters.fixture.ts`

Security context objects for authenticated requests.

| Property | Type | Description |
|----------|------|-------------|
| `principalId` | `string` | User's unique identifier |
| `tenantId` | `string` | User's tenant |

Generated dynamically from `CREATOR_RECORDS` for each creator.

---

## Data Relationships

```
┌─────────────┐
│   TENANTS    │
└──────┬───────┘
       │
       ├── ABCD (tenant)
       │    ├── ALICE (creator)
       │    │    ├── FIRST, SECOND (posts)
       │    │    └── Notifications received
       │    ├── BOB (creator)
       │    │    ├── Ratings on FIRST
       │    │    └── Following ALICE, DAVID
       │    ├── CHARLIE (creator)
       │    │    └── THIRD (post)
       │    └── DAVID (creator)
       │         └── FOURTH (post)
       │
       └── EFGH (tenant)
            ├── EVE (creator)
            │    └── FIFTH (post)
            ├── FELIX (creator)
            │    └── SIXTH (post)
            ├── GEORGE (creator)
            │    └── SEVENTH (post)
            └── HENRY (creator)
                 └── DELETED (post, soft deleted)
```

### Key Relationships

1. **Tenants → Creators**: One-to-many, establishes multi-tenancy
2. **Creators → Posts**: One-to-many, creators produce content
3. **Posts → Comics**: One-to-one, posts reference comic data
4. **Posts → Images**: One-to-one, comics reference image storage
5. **Creators → Relations**: One-to-many, creators follow others
6. **Creators → Notifications**: One-to-many, actions generate notifications
7. **Creators → Ratings**: One-to-many, creators rate posts
8. **Ratings/Reactions → Post Metrics**: Aggregation source
9. **Creators → Identities**: One-to-one, authentication data
10. **Creators → Requesters**: One-to-one, security context

---

## Test Scenarios Covered

### Multi-Tenancy Testing
- Cross-tenant data isolation (ABCD vs EFGH)
- Tenant-specific content filtering
- Cross-tenant notification handling

### Social Interaction Testing
- **Following Graph**: Bidirectional relationships (Bob follows Alice, David follows Bob)
- **Content Rating**: Multiple ratings on a single post (First post has 3 ratings)
- **Reactions**: Reactions to posts and comments
- **Notification Lifecycle**: Active and deleted notifications

### Content Lifecycle Testing
- **Active Content**: Multiple posts across tenants
- **Soft Deletion**: Posts with `deleted: true` flag
- **Reaction Chains**: Reactions to posts and comments

### User Persona Testing
- **Active Creator** (Alice): Multiple posts, many followers
- **Active Engager** (Bob): Rates, reacts, follows multiple creators
- **Moderate Users** (Charlie, David): Some content and interactions
- **Minimal Users** (Eve, Felix, George, Henry): Limited activity

---

## Usage Examples

### Import All Fixtures

```typescript
import {
    TENANTS,
    CREATOR_RECORDS,
    CREATOR_METRICS_RECORDS,
    IDENTITIES,
    IMAGE_RECORDS,
    POST_RECORDS,
    COMIC_RECORDS,
    COMMENT_RECORDS,
    POST_METRICS_RECORDS,
    RATING_RECORDS,
    NOTIFICATION_RECORDS,
    RELATION_RECORDS,
    REQUESTERS
} from '@comify/social/fixtures/data';
```

### Import Specific Fixtures

```typescript
import { CREATOR_RECORDS, POST_RECORDS } from '@comify/social/fixtures/data';

// Access by key
const alice = CREATOR_RECORDS.ALICE;
const firstPost = POST_RECORDS.FIRST;
```

### Using in Tests

```typescript
import { describe, it } from 'vitest';
import { CREATOR_RECORDS, POST_RECORDS, RELATION_RECORDS } from '@comify/social/fixtures/data';

describe('Social Features', () => {
    it('should filter posts by tenant', () => {
        const abcdPosts = Object.values(POST_RECORDS)
            .filter(post => post.tenantId === 'ABCD');
        
        expect(abcdPosts).toHaveLength(4);
    });

    it('should resolve creator following relationships', () => {
        const aliceFollowers = RELATION_RECORDS
            .filter(r => r.followingId === CREATOR_RECORDS.ALICE.id);
        
        expect(aliceFollowers).toHaveLength(2);
    });
});
```

---

## Type Exports

All fixtures export TypeScript types for type-safe test development:

| Type | Source File |
|------|-------------|
| `CREATOR_RECORDS` | `creators.fixture.ts` |
| `CREATOR_METRICS_RECORDS` | `creator.metrics.fixture.ts` |
| `IMAGE_STORAGE_KEYS` | `images.fixture.ts` |
| `IMAGE_DATA_URLS` | `images.fixture.ts` |
| `IMAGES` | `images.fixture.ts` |
| `IMAGE_RECORDS` | `images.fixture.ts` |
| `COMIC_RECORDS` | `post.comics.fixture.ts` |
| `COMMENT_RECORDS` | `post.comments.fixture.ts` |
| `POST_METRICS_RECORDS` | `post.metrics.fixture.ts` |
| `REACTION_METRICS_RECORDS` | `post.metrics.fixture.ts` |
| `RATING_RECORDS` | `post.ratings.fixture.ts` |
| `NOTIFICATION_RECORDS` | `notifications.fixture.ts` |
| `POST_RECORDS` | `posts.fixture.ts` |
| `REACTION_RECORDS` | `posts.fixture.ts` |
| `RELATION_RECORDS` | `relations.fixture.ts` |
| `TENANTS` | `tenants.fixture.ts` |