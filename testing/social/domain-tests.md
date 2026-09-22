# Social Domain Tests Documentation

## Overview

This documentation describes the domain-level integration tests for the social features of Comify. The tests are located in `testing/social/domain` and cover all social domain operations including creators, images, posts, notifications, relations, and content interactions.

### Purpose

The domain tests serve as:
- **Integration Tests**: Test real database, file store, and event broker interactions
- **Behavioral Documentation**: Document expected system behavior for each operation
- **Validation Suite**: Validate domain logic, error handling, and edge cases

### Test Structure

Each test file follows a consistent pattern:
- **Setup**: Connect to database, event broker, and file store before all tests
- **Seeding**: Reset test data before each test via `beforeEach`
- **Teardown**: Disconnect from all integrations after all tests

---

## Test Categories

### 1. Creator Tests

**Location**: `testing/social/domain/creator/`

Tests for creator account management operations.

#### updateFullName.spec.ts

Tests for updating creator full names.

**Dependencies**: `database`, `eventBroker`
**Setup Function**: `seedCreators()`

| Test Case | Description | Expected Result |
|-----------|-------------|-----------------|
| Update full name | Valid name update | Record updated with new fullName |
| Invalid full name | Name exceeds `FULL_NAME_MAX_LENGTH` | Throws `InvalidFullName` error |

**Key Values**:
- Uses `REQUESTERS.ALICE` as the updating creator
- Test name: `CREATOR_RECORDS.ALICE.fullName + ' Updated'`
- Max length constant: `FULL_NAME_MAX_LENGTH`

---

#### updateNickname.spec.ts

Tests for updating creator nicknames.

**Dependencies**: `database`
**Setup Function**: `seedCreators()`

| Test Case | Description | Expected Result |
|-----------|-------------|-----------------|
| Update nickname | Valid unique nickname | Record updated with new nickname |
| Duplicate nickname | Nickname already exists (Bob's) | Throws `NicknameAlreadyExists` error |

**Key Values**:
- Uses `REQUESTERS.ALICE` as the updating creator
- New nickname: `'aaaaaliceee'`
- Duplicate check: `CREATOR_RECORDS.BOB.nickname`

---

### 2. Image Tests

**Location**: `testing/social/domain/image/`

Tests for image management operations (creation and download).

#### create.spec.ts

Tests for creating images from data URLs.

**Dependencies**: `database`, `fileStore`

| Test Case | Storage Key Input | Data URL Source | Expected Result |
|-----------|-------------------|-----------------|-----------------|
| Valid data URL | `'valid_url'` | `DATA_URLS.VALID` | Image created, filename='dataUrl', mimeType='image/png', 54 bytes stored |
| Invalid data format | `'invalid_url'` | `DATA_URLS.INVALID_DATA` | Throws `InvalidDataURL` error |
| Invalid type | `'invalid_type'` | `DATA_URLS.INVALID_TYPE` | Throws `InvalidImage` with 'mimeType' error |
| Size too small | `'invalid_size'` | `DATA_URLS.INVALID_SIZE` | Throws `InvalidImage` with 'size' error |

**Image URL Fixtures** (`fixtures/data.fixture.ts`):

| Key | Value | Purpose |
|-----|-------|---------|
| `VALID` | `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR42mL8//8/AyUYIIgBh` | Valid 54-byte PNG |
| `INVALID_DATA` | `'invalid'` | Malformed data URL |
| `INVALID_TYPE` | `data:image/tiff;base64,...` | Invalid MIME type (TIFF) |
| `INVALID_SIZE` | `data:image/png;base64,123` | Too small to be valid |

---

#### download.spec.ts

Tests for downloading images from external URLs.

**Dependencies**: `database`, `fileStore`
**Setup Function**: `seedImages()`

| Test Case | URL | Expected Result |
|-----------|-----|-----------------|
| Valid download | `URLS.VALID` | Image created, filename='image.jpg', mimeType='image/jpeg', 95 bytes stored |
| Non-existing image | `URLS.NONEXISTING` (404) | Throws `ImageNotDownloaded` error |
| Invalid type | `URLS.INVALID_TYPE` (TIFF) | Throws `InvalidImage` with 'mimeType' error |
| Size too large | `URLS.INVALID_SIZE` | Throws `InvalidImage` with 'size' error |

**URL Fixtures** (`fixtures/data.fixture.ts`):

| Key | URL | Response |
|-----|-----|----------|
| `VALID` | `http://localhost/image.jpg` | 200, image/jpeg, 95 bytes |
| `INVALID_TYPE` | `http://localhost/invalid-type.jpg` | 200, image/tiff, 96 bytes |
| `INVALID_SIZE` | `http://localhost/invalid-size.jpg` | 200, image/jpeg, 5MB |
| `NONEXISTING` | `http://localhost/nonexisting.jpg` | 404 |

**Setup Fixture** (`fixtures/setup.fixture.ts`):
- Uses HTTP driver mocking via `mappedDriver.setMapping()`
- Sets up HEAD and GET response mappings for URL validation

---

### 3. Notification Tests

**Location**: `testing/social/domain/notification/`

Tests for notification management operations.

#### create.spec.ts

Tests for creating notifications of various types.

**Dependencies**: `database`
**Setup Function**: `seedNotifications()`

**Notification Types Tested**:

| Type | Parameters | Verification |
|------|------------|--------------|
| `Types.RATED_POST` | alice rates third post | Creates notification with postId=THIRD.id |
| `Types.STARTED_FOLLOWING` | Alice follows David | Creates notification without postId |
| `Types.REACTED_TO_POST` | Alice reacts to fourth post | Creates notification with postId=FOURTH.id |
| Failure case | N/A | No action needed (integration-level only) |

**Key Values**:
- Uses `CREATOR_RECORDS.ALICE.id` as sender
- Uses `POST_RECORDS.THIRD.creatorId`, `POST_RECORDS.FOURTH.creatorId` as receivers

---

#### getRecent.spec.ts

Tests for retrieving recent notifications for a creator.

**Dependencies**: `database`, `fileStore`
**Setup Function**: `fullySeedNotifications()`

| Test Case | Requester | Parameters | Expected Result |
|-----------|-----------|------------|-----------------|
| Get all notifications | `REQUESTERS.ALICE` | `{ offset: 0, limit: 10 }` | 7 notifications, sorted by recency |

**Expected Notification Order** (most recent first):

| Index | Notification ID | Type |
|-------|----------------|------|
| 0 | `DAVID_RATED_FIRST` | Rating |
| 1 | `CHARLIE_FOLLOWING_ALICE` | Following |
| 2 | `BOB_RATED_FIRST` | Rating |
| 3 | `CHARLIE_REACTED_TO_FIRST` | Reaction |
| 4 | `BOB_FOLLOWING_ALICE` | Following |
| 5 | `CHARLIE_RATED_FIRST` | Rating |
| 6 | `BOB_REACTED_TO_FIRST` | Reaction |

---

#### removeByPost.spec.ts

Tests for removing notifications when a post is deleted.

**Dependencies**: `database`
**Setup Function**: `seedNotifications()`

| Test Case | Post ID | Expected Result |
|-----------|---------|-----------------|
| Remove post notifications | `POST_RECORDS.FIRST.id` | All notifications with that postId are deleted |

---

### 4. Post Tests

**Location**: `testing/social/domain/post/`

Tests for post management operations.

#### createWithComic.spec.ts

Tests for creating posts with embedded comic data.

**Dependencies**: `database`, `eventBroker`, `fileStore`

| Test Case | Parameters | Expected Result |
|-----------|------------|-----------------|
| Create post | `REQUESTERS.ALICE`, `{ imageDataUrl: IMAGE_DATA_URLS.COMIC }` | Post created with creatorId, comicId, createdAt |

**Key Values**:
- Uses `IMAGE_DATA_URLS.COMIC` for comic image data

---

#### getByFollowing.spec.ts

Tests for retrieving posts from followed creators.

**Dependencies**: `database`, `fileStore`
**Setup Function**: `fullySeedPosts()`

| Test Case | Requester | Parameters | Expected Result |
|-----------|-----------|------------|-----------------|
| Get followed posts | `REQUESTERS.CHARLIE` | `{ offset: 0, limit: 7 }` | 2 posts (Charlie only follows Alice) |

**Expected Posts** (most recent first):

| Index | Post ID | Creator |
|-------|---------|---------|
| 0 | `POST_RECORDS.SECOND.id` | ALICE |
| 1 | `POST_RECORDS.FIRST.id` | ALICE |

---

#### getRecommended.spec.ts

Tests for retrieving recommended posts (excluding requester's own).

**Dependencies**: `database`, `fileStore`
**Setup Function**: `fullySeedPosts()`

| Test Case | Requester | Parameters | Expected Result |
|-----------|-----------|------------|-----------------|
| Get recommendations | `REQUESTERS.CHARLIE` | `{ offset: 0, limit: 7 }` | 3 posts (excludes Charlie's own THIRD post) |

**Expected Posts**:

| Index | Post ID | Creator |
|-------|---------|---------|
| 0 | `POST_RECORDS.FOURTH.id` | DAVID |
| 1 | `POST_RECORDS.SECOND.id` | ALICE |
| 2 | `POST_RECORDS.FIRST.id` | ALICE |

---

#### remove.spec.ts

Tests for soft-deleting posts.

**Dependencies**: `database`, `eventBroker`
**Setup Function**: `seedPosts()`

| Test Case | Requester | Post ID | Expected Result |
|-----------|-----------|---------|-----------------|
| Soft delete | `REQUESTERS.ALICE` | `POST_RECORDS.SECOND.id` | `deleted = true` |
| Re-delete already deleted | `REQUESTERS.HENRY` | `POST_RECORDS.DELETED.id` | Throws `PostNotFound` error |
| Delete another's post | `REQUESTERS.BOB` | `POST_RECORDS.FIRST.id` | `deleted = false` (no change) |

---

### 5. Post Comic Tests

**Location**: `testing/social/domain/post.comic/`

Tests for comic content creation.

#### create.spec.ts

Tests for creating comic records from image data.

**Dependencies**: `database`, `fileStore`

| Test Case | Parameters | Expected Result |
|-----------|------------|-----------------|
| Create comic | `{ imageDataUrl: IMAGE_DATA_URLS.COMIC }` | Comic created with imageId |

**Key Values**:
- Uses `IMAGE_DATA_URLS.COMIC` for comic image data

---

### 6. Post Comment Tests

**Location**: `testing/social/domain/post.comment/`

Tests for comment creation on posts.

#### create.spec.ts

Tests for creating comment reactions.

**Dependencies**: `database`

| Test Case | Message | Expected Result |
|-----------|---------|-----------------|
| Create comment | `'New comment'` | Comment created with message |
| Invalid message | `'A'.repeat(MESSAGE_MAX_LENGTH + 1)` | Throws `InvalidComment` error |

**Constants**:
- `MESSAGE_MAX_LENGTH`: Maximum allowed message length

---

### 7. Post Rating Tests

**Location**: `testing/social/domain/post.rating/`

Tests for post rating toggle operations.

#### toggle.spec.ts

Tests for adding and removing post ratings.

**Dependencies**: `database`, `eventBroker`
**Setup Functions**: `seedPosts()`, `seedRatings()`

| Test Case | Requester | Post ID | Expected Result |
|-----------|-----------|---------|-----------------|
| Add rating | `REQUESTERS.BOB` | `POST_RECORDS.SECOND.id` | Returns `true` (rating added) |
| Remove rating | `REQUESTERS.BOB` | `POST_RECORDS.FIRST.id` | Returns `false` (rating removed) |

**Setup Notes**:
- Bob already has a rating on FIRST post (from `seedRatings()`)
- SECOND post has no existing rating from Bob

---

### 8. Relation Tests

**Location**: `testing/social/domain/relation/`

Tests for creator relationship/following operations.

#### establish.spec.ts

Tests for establishing follow relationships.

**Dependencies**: `database`, `eventBroker`
**Setup Function**: `fullySeedCreators()`

| Test Case | Requester | Target Creator | Expected Result |
|-----------|-----------|----------------|-----------------|
| Establish relation | `REQUESTERS.ALICE` | `CREATOR_RECORDS.BOB.id` | Relation created |
| Duplicate relation | `REQUESTERS.BOB` | `CREATOR_RECORDS.ALICE.id` | Throws `RelationAlreadyExists` error |

**Pre-existing Relations** (from `fullySeedCreators()`):
- Bob follows Alice
- Bob follows David
- Charlie follows Alice
- David follows Bob

---

#### explore.spec.ts

Tests for discovering creators to follow.

**Dependencies**: `database`
**Setup Function**: `fullySeedCreators()`

**Range**: `{ limit: 7, offset: 0 }`

| Test Case | Requester | Search Query | Expected Result |
|-----------|-----------|-------------|-----------------|
| Explore recent | `REQUESTERS.CHARLIE` | (none) | 2 relations: Bob, David |
| No results | `REQUESTERS.ALICE` | `'eve'` | 0 relations |
| By full name | `REQUESTERS.ALICE` | `'Castillo'` | 1 relation: Charlie |
| By nickname | `REQUESTERS.ALICE` | `'thegreat'` | 1 relation: Bob |
| Partial name match | `REQUESTERS.DAVID` | `'li'` | 2 relations: Alice, Charlie |

**Search Coverage**:
- Recent following (by join date)
- Full name substring matching
- Nickname substring matching
- Partial name matching (handles name splitting)

---

#### getFollowers.spec.ts

Tests for retrieving followers of a creator.

**Dependencies**: `database`
**Setup Function**: `fullySeedCreators()`

| Test Case | Requester | Target Creator | Parameters | Expected Result |
|-----------|-----------|----------------|------------|-----------------|
| Get followers | `REQUESTERS.ALICE` | `CREATOR_RECORDS.ALICE.id` | `{ limit: 7, offset: 0 }` | 2 followers: Bob, Charlie |

---

#### getFollowing.spec.ts

Tests for retrieving creators that a user follows.

**Dependencies**: `database`
**Setup Function**: `fullySeedCreators()`

| Test Case | Requester | Target Creator | Parameters | Expected Result |
|-----------|-----------|----------------|------------|-----------------|
| Get following | `REQUESTERS.BOB` | `CREATOR_RECORDS.BOB.id` | `{ limit: 7, offset: 0 }` | 2 following: Alice, David |

---

## Test Fixtures

### Image Domain Fixtures

**Location**: `testing/social/domain/image/fixtures/`

#### Data Fixtures (`data.fixture.ts`)

**URLs** (external URLs to download):

| Key | URL | Purpose |
|-----|-----|---------|
| `VALID` | `http://localhost/image.jpg` | Valid image response |
| `INVALID_DATA` | `http://localhost/invalid.jpg` | Malformed data URL |
| `INVALID_TYPE` | `http://localhost/invalid-type.jpg` | Invalid MIME type |
| `INVALID_SIZE` | `http://localhost/invalid-size.jpg` | Size validation |
| `NONEXISTING` | `http://localhost/nonexisting.jpg` | 404 response |

**Data URLs** (embedded image data):

| Key | Value | Purpose |
|-----|-------|---------|
| `VALID` | `data:image/png;base64,...` | Valid 54-byte PNG |
| `INVALID_FORMAT` | `'invalid'` | Malformed data URL |
| `INVALID_TYPE` | `data:image/tiff;base64,...` | Invalid MIME type |
| `INVALID_SIZE` | `data:image/png;base64,123` | Too small |

**Responses** (HTTP mock responses):

| Key | Status | Content-Type | Content-Length |
|-----|--------|--------------|----------------|
| `VALID` | 200 | `image/jpeg` | 95 |
| `INVALID_TYPE` | 200 | `image/tiff` | 96 |
| `INVALID_SIZE` | 200 | `image/jpeg` | 5,242,881 |
| `NONEXISTING` | 404 | - | - |

#### Setup Fixtures (`setup.fixture.ts`)

`seedImages()`: Configures HTTP driver mock mappings:
- HEAD and GET mappings for `URLS.VALID`
- HEAD mappings for invalid type, size, and non-existing URLs

---

### Main Fixtures

**Location**: `testing/social/fixtures/`

#### Data Exports (`data/index.ts`)

Re-exports all fixture data modules:
- `creators.fixture` - Creator records
- `creators.fixture` - Creator metrics
- `identities.fixture` - Identity records
- `images.fixture` - Image data
- `notifications.fixture` - Notification records
- `posts.fixture` - Post records
- `post.comics.fixture` - Comic records
- `post.comments.fixture` - Comment records
- `post.metrics.fixture` - Post metrics
- `post.ratings.fixture` - Rating records
- `relations.fixture` - Relation records
- `requesters.fixture` - Requester objects
- `tenants.fixture` - Tenant definitions

#### Setup Functions (`setup/index.ts`)

**Seeding Functions** (granular control):

| Function | Seeds |
|----------|-------|
| `seedCreators()` | Creator records |
| `seedCreatorMetrics()` | Creator metrics |
| `seedImages()` | Database + storage image records |
| `seedNotifications()` | Notification records |
| `seedComics()` | Comic records |
| `seedComments()` | Comment records |
| `seedPosts()` | Post records |
| `seedPostMetrics()` | Post metrics |
| `seedRatings()` | Rating records |
| `seedRelations()` | Relation records |

**Composite Seeding Functions** (full setup):

| Function | Includes |
|----------|----------|
| `seedImages()` | `seedImagesDatabase()` + `seedImagesStorage()` |
| `fullySeedCreators()` | Creators + Creator Metrics + Relations |
| `fullySeedPosts()` | Fully seed creators + Images + Comics + Comments + Posts + Post Metrics + Ratings |
| `fullySeedNotifications()` | Fully seed posts + Notifications |

---

## Integration Dependencies

### Integrations Used by Tests

| Integration | Used By | Purpose |
|-------------|---------|---------|
| `database` | All tests | Record persistence and retrieval |
| `eventBroker` | Creator, Post, Rating, Notification tests | Event publishing for side effects |
| `fileStore` | Image, Post tests | File storage for images |

### Connection Pattern

```typescript
beforeAll(async () =>
{
    await Promise.all([
        database.connect(),
        eventBroker.connect(),    // when needed
        fileStore.connect()       // when needed
    ]);
});

afterAll(async () =>
{
    await Promise.all([
        database.disconnect(),
        eventBroker.disconnect(),  // when needed
        fileStore.disconnect()     // when needed
    ]);
});
```

---

## Error Types Reference

| Error Type | Module | Trigger Condition |
|------------|--------|-------------------|
| `InvalidFullName` | creator | Full name exceeds max length |
| `NicknameAlreadyExists` | creator | Nickname already taken by another creator |
| `InvalidDataURL` | image | Malformed or invalid data URL format |
| `InvalidImage` | image | Invalid MIME type or size constraints |
| `ImageNotDownloaded` | image | HTTP 404 or download failure |
| `PostNotFound` | post | Post doesn't exist or already deleted |
| `InvalidComment` | post.comment | Message exceeds max length |
| `RelationAlreadyExists` | relation | Follow relationship already exists |

---

## Test Execution Summary

### Total Test Files: 15

| Category | Files | Tests |
|----------|-------|-------|
| Creator | 2 (updateFullName, updateNickname) | ~4 |
| Image | 2 (create, download) | ~8 |
| Notification | 3 (create, getRecent, removeByPost) | ~6 |
| Post | 4 (createWithComic, getByFollowing, getRecommended, remove) | ~8 |
| Post Comic | 1 (create) | ~1 |
| Post Comment | 1 (create) | ~2 |
| Post Rating | 1 (toggle) | ~2 |
| Relation | 4 (establish, explore, getFollowers, getFollowing) | ~9 |

**Total Estimated Test Cases: ~40**

---

## Usage Examples

### Running All Domain Tests

```bash
npm test -- testing/social/domain/
```

### Running Specific Category Tests

```bash
npm test -- testing/social/domain/creator/
npm test -- testing/social/domain/image/
npm test -- testing/social/domain/notification/
npm test -- testing/social/domain/post/
```

### Running a Single Test File

```bash
npm test -- testing/social/domain/creator/updateFullName.spec.ts
```

### Using Seed Functions in Custom Tests

```typescript
import { describe, it, beforeEach } from 'vitest';
import { fullySeedCreators, REQUESTERS, CREATOR_RECORDS } from '@comify/social/fixtures';

describe('Custom Relation Test', () => {
    beforeEach(async () =>
    {
        await fullySeedCreators();
    });

    it('should follow a creator', async () =>
    {
        // Use pre-seeded data
        const targetCreator = CREATOR_RECORDS.BOB;
        const requester = REQUESTERS.ALICE;
        
        // Test implementation...
    });
});