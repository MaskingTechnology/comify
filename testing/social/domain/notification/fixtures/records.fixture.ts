
import type { RecordData } from '@theshelf/database';

import type { Record as CreatorRecord } from '@comify/social/domain/creator';
import type { Record as CreatorMetricsRecord } from '@comify/social/domain/creator.metrics';
import type { Record as ImageRecord } from '@comify/social/domain/image';
import type { Record as NotificationRecord } from '@comify/social/domain/notification';
import { Types } from '@comify/social/domain/notification';
import type { Record as PostRecord } from '@comify/social/domain/post';
import type { Record as ComicRecord } from '@comify/social/domain/post.comic';
import type { Record as PostMetricsModel } from '@comify/social/domain/post.metrics';
import type { Record as RatingRecord } from '@comify/social/domain/post.rating';
import type { Record as RelationRecord } from '@comify/social/domain/relation';

import { TENANTS } from './tenants.fixture';
import { VALUES } from './values.fixture';

const CREATORS: CreatorRecord[] = [
    { id: VALUES.IDS.CREATOR1, fullName: VALUES.FULL_NAMES.CREATOR1, nickname: VALUES.NICKNAMES.CREATOR1, email: VALUES.EMAILS.CREATOR1, portraitId: undefined, tenantId: TENANTS.default.id, joinedAt: new Date().toISOString() },
    { id: VALUES.IDS.CREATOR2, fullName: VALUES.FULL_NAMES.CREATOR2, nickname: VALUES.NICKNAMES.CREATOR2, email: VALUES.EMAILS.CREATOR2, portraitId: undefined, tenantId: TENANTS.default.id, joinedAt: new Date().toISOString() },
    { id: VALUES.IDS.CREATOR3, fullName: VALUES.FULL_NAMES.CREATOR3, nickname: VALUES.NICKNAMES.CREATOR3, email: VALUES.EMAILS.CREATOR3, portraitId: undefined, tenantId: TENANTS.default.id, joinedAt: new Date().toISOString() }
];

const CREATOR_METRICS: CreatorMetricsRecord[] = [
    { id: VALUES.IDS.CREATOR1, creatorId: VALUES.IDS.CREATOR1, followers: 1, following: 1, posts: 1, popularity: 0 },
    { id: VALUES.IDS.CREATOR2, creatorId: VALUES.IDS.CREATOR2, followers: 1, following: 1, posts: 1, popularity: 0 },
    { id: VALUES.IDS.CREATOR3, creatorId: VALUES.IDS.CREATOR3, followers: 0, following: 0, posts: 0, popularity: 0 }
];

const RELATIONS: RelationRecord[] = [
    { id: VALUES.IDS.RELATION1, followerId: VALUES.IDS.CREATOR1, followingId: VALUES.IDS.CREATOR2 },
    { id: VALUES.IDS.RELATION2, followerId: VALUES.IDS.CREATOR2, followingId: VALUES.IDS.CREATOR1 }
];

const IMAGES: ImageRecord[] = [
    { id: VALUES.IDS.IMAGE, storageKey: VALUES.STORAGE_KEYS.IMAGE, filename: VALUES.FILENAMES.FIRST, mimeType: 'image/png', size: 0 }
];

const COMICS: ComicRecord[] = [
    { id: VALUES.IDS.COMIC, imageId: VALUES.IDS.IMAGE }
];

const POSTS: PostRecord[] = [
    { id: VALUES.IDS.POST_RATED, creatorId: VALUES.IDS.CREATOR1, comicId: VALUES.IDS.COMIC, tenantId: TENANTS.default.id, createdAt: new Date().toISOString(), deleted: false },
    { id: VALUES.IDS.POST_DELETED, creatorId: VALUES.IDS.CREATOR1, comicId: VALUES.IDS.COMIC, tenantId: TENANTS.default.id, createdAt: new Date().toISOString(), deleted: true },
    { id: VALUES.IDS.REACTION_LIKED, creatorId: VALUES.IDS.CREATOR2, comicId: VALUES.IDS.COMIC, tenantId: TENANTS.default.id, parentId: VALUES.IDS.POST_RATED, createdAt: new Date().toISOString(), deleted: false }
];

const POST_METRICS: PostMetricsModel[] = [
    { id: VALUES.IDS.POST_RATED, postId: VALUES.IDS.POST_RATED, ratings: 1, reactions: 0, popularity: 0 },
    { id: VALUES.IDS.POST_DELETED, postId: VALUES.IDS.POST_DELETED, ratings: 0, reactions: 0, popularity: 0 },
    { id: VALUES.IDS.REACTION_LIKED, postId: VALUES.IDS.REACTION_LIKED, ratings: 0, reactions: 1, popularity: 0 }
];

const RATINGS: RatingRecord[] = [
    { id: VALUES.IDS.RATING1, createdAt: new Date().toISOString(), creatorId: VALUES.IDS.CREATOR3, postId: VALUES.IDS.POST_RATED },
    { id: VALUES.IDS.RATING2, createdAt: new Date().toISOString(), creatorId: VALUES.IDS.CREATOR2, postId: VALUES.IDS.REACTION_LIKED }
];

const NOTIFICATIONS: NotificationRecord[] = [
    { id: VALUES.IDS.NOTIFICATION1, createdAt: new Date().toISOString(), type: Types.STARTED_FOLLOWING, senderId: VALUES.IDS.CREATOR1, receiverId: VALUES.IDS.CREATOR2, postId: undefined, deleted: false },
    { id: VALUES.IDS.NOTIFICATION2, createdAt: new Date().toISOString(), type: Types.STARTED_FOLLOWING, senderId: VALUES.IDS.CREATOR2, receiverId: VALUES.IDS.CREATOR1, postId: undefined, deleted: false },
    { id: VALUES.IDS.NOTIFICATION3, createdAt: new Date('01-05-2024').toISOString(), type: Types.RATED_POST, senderId: VALUES.IDS.CREATOR3, receiverId: VALUES.IDS.CREATOR2, postId: VALUES.IDS.POST_RATED, deleted: false },
    { id: VALUES.IDS.NOTIFICATION6, createdAt: new Date().toISOString(), type: Types.REACTED_TO_POST, senderId: VALUES.IDS.CREATOR1, receiverId: VALUES.IDS.CREATOR3, postId: VALUES.IDS.REACTION_LIKED, deleted: false },
    { id: VALUES.IDS.NOTIFICATION4, createdAt: new Date('01-04-2024').toISOString(), type: Types.RATED_POST, senderId: VALUES.IDS.CREATOR2, receiverId: VALUES.IDS.CREATOR1, postId: VALUES.IDS.REACTION_LIKED, deleted: false },
    { id: VALUES.IDS.NOTIFICATION5, createdAt: new Date('01-03-2024').toISOString(), type: Types.RATED_POST, senderId: VALUES.IDS.CREATOR1, receiverId: VALUES.IDS.CREATOR1, postId: VALUES.IDS.POST_DELETED, deleted: false }
];

export const RECORDS: Record<string, RecordData[]> = { CREATORS, CREATOR_METRICS, RELATIONS, IMAGES, COMICS, POSTS, POST_METRICS, RATINGS, NOTIFICATIONS };
