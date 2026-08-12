
import type { RecordData } from '@theshelf/database';

import type { Record as CreatorRecord } from '@comify/social/domain/creator';
import type { Record as CreatorMetricsRecord } from '@comify/social/domain/creator.metrics';
import type { Record as ImageRecord } from '@comify/social/domain/image';
import type { Record as PostRecord } from '@comify/social/domain/post';
import type { Record as ComicRecord } from '@comify/social/domain/post.comic';
import type { Record as PostMetricsRecord } from '@comify/social/domain/post.metrics';
import type { Record as RatingRecord } from '@comify/social/domain/post.rating';
import type { Record as RelationRecord } from '@comify/social/domain/relation';

import { REQUESTERS } from './requesters.fixture';
import { TENANTS } from './tenants.fixture';
import { VALUES } from './values.fixture';

const NOW = new Date().toISOString();

const CREATORS: CreatorRecord[] = [
    { id: VALUES.IDS.CREATOR1, fullName: VALUES.FULL_NAMES.CREATOR1, nickname: VALUES.NICKNAMES.CREATOR1, email: VALUES.EMAILS.CREATOR1, tenantId: TENANTS.default.id, joinedAt: NOW },
    { id: VALUES.IDS.CREATOR2, fullName: VALUES.FULL_NAMES.CREATOR2, nickname: VALUES.NICKNAMES.CREATOR2, email: VALUES.EMAILS.CREATOR2, tenantId: TENANTS.default.id, joinedAt: NOW }
];

const CREATOR_METRICS: CreatorMetricsRecord[] = [
    { id: VALUES.IDS.CREATOR1, creatorId: VALUES.IDS.CREATOR1, posts: 0, followers: 0, following: 0, popularity: 0 },
    { id: VALUES.IDS.CREATOR2, creatorId: VALUES.IDS.CREATOR2, posts: 0, followers: 0, following: 0, popularity: 0 }
];

const RELATIONS: RelationRecord[] = [
    { id: VALUES.IDS.RELATION1, followerId: VALUES.IDS.CREATOR1, followingId: VALUES.IDS.CREATOR2 }
];

const IMAGES: ImageRecord[] = [
    { id: VALUES.IDS.IMAGE, storageKey: VALUES.STORAGE_KEYS.IMAGE, filename: VALUES.FILENAMES.FIRST, mimeType: 'image/png', size: 0 }
];

const COMICS: ComicRecord[] = [
    { id: VALUES.IDS.COMIC, imageId: VALUES.IDS.IMAGE }
];

const POSTS: (PostRecord & { deleted: boolean; })[] = [
    { id: VALUES.IDS.POST_RATED, creatorId: REQUESTERS.CREATOR1.principalId, comicId: VALUES.IDS.COMIC, tenantId: TENANTS.default.id, createdAt: NOW, deleted: false },
    { id: VALUES.IDS.POST_UNRATED, creatorId: REQUESTERS.CREATOR1.principalId, comicId: VALUES.IDS.COMIC, tenantId: TENANTS.default.id, createdAt: NOW, deleted: false },
    { id: VALUES.IDS.POST_EXTRA1, creatorId: REQUESTERS.CREATOR2.principalId, comicId: VALUES.IDS.COMIC, tenantId: TENANTS.default.id, createdAt: NOW, deleted: false },
    { id: VALUES.IDS.POST_DELETED, creatorId: REQUESTERS.CREATOR1.principalId, comicId: VALUES.IDS.COMIC, tenantId: TENANTS.default.id, createdAt: NOW, deleted: true },
];

const POST_METRICS: PostMetricsRecord[] = [
    { id: VALUES.IDS.POST_RATED, postId: VALUES.IDS.POST_RATED, ratings: 1, reactions: 0, popularity: 0 },
    { id: VALUES.IDS.POST_UNRATED, postId: VALUES.IDS.POST_UNRATED, ratings: 0, reactions: 0, popularity: 0 },
    { id: VALUES.IDS.POST_EXTRA1, postId: VALUES.IDS.POST_EXTRA1, ratings: 0, reactions: 0, popularity: 0 },
    { id: VALUES.IDS.POST_DELETED, postId: VALUES.IDS.POST_DELETED, ratings: 0, reactions: 0, popularity: 0 }
];

const RATINGS: RatingRecord[] = [
    { id: VALUES.IDS.RATING, creatorId: REQUESTERS.CREATOR1.principalId, postId: VALUES.IDS.POST_RATED, createdAt: NOW }
];

export const RECORDS: Record<string, RecordData[]> = { CREATORS, CREATOR_METRICS, RELATIONS, IMAGES, COMICS, POSTS, POST_METRICS, RATINGS };
