
import type { RecordData } from '^/integrations/database';

import type { DataModel as ComicDataModel } from '^/domain/comic';
import type { DataModel as CreatorDataModel } from '^/domain/creator';
import type { DataModel as CreatorMetricsDataModel } from '^/domain/creator.metrics';
import type { DataModel as ImageDataModel } from '^/domain/image';
import type { DataModel as PostDataModel } from '^/domain/post';
import type { DataModel as PostMetricsDataModel } from '^/domain/post.metrics';
import type { DataModel as RatingDataModel } from '^/domain/rating';
import type { DataModel as RelationDataModel } from '^/domain/relation';

import { REQUESTERS } from './requesters.fixture';
import { TENANTS } from './tenants.fixture';
import { VALUES } from './values.fixture';

const NOW = new Date().toISOString();

const CREATORS: CreatorDataModel[] = [
    { id: VALUES.IDS.CREATOR1, fullName: VALUES.FULL_NAMES.CREATOR1, nickname: VALUES.NICKNAMES.CREATOR1, email: VALUES.EMAILS.CREATOR1, tenantId: TENANTS.default.id, joinedAt: NOW },
    { id: VALUES.IDS.CREATOR2, fullName: VALUES.FULL_NAMES.CREATOR2, nickname: VALUES.NICKNAMES.CREATOR2, email: VALUES.EMAILS.CREATOR2, tenantId: TENANTS.default.id, joinedAt: NOW }
];

const CREATOR_METRICS: CreatorMetricsDataModel[] = [
    { id: VALUES.IDS.CREATOR1, creatorId: VALUES.IDS.CREATOR1, posts: 0, followers: 0, following: 0, popularity: 0 },
    { id: VALUES.IDS.CREATOR2, creatorId: VALUES.IDS.CREATOR2, posts: 0, followers: 0, following: 0, popularity: 0 }
];

const RELATIONS: RelationDataModel[] = [
    { id: VALUES.IDS.RELATION1, followerId: VALUES.IDS.CREATOR1, followingId: VALUES.IDS.CREATOR2 }
];

const IMAGES: ImageDataModel[] = [
    { id: VALUES.IDS.IMAGE, storageKey: VALUES.STORAGE_KEYS.IMAGE, filename: VALUES.FILENAMES.FIRST, mimeType: 'image/png', size: 0 }
];

const COMICS: ComicDataModel[] = [
    { id: VALUES.IDS.COMIC, imageId: VALUES.IDS.IMAGE }
];

const POSTS: (PostDataModel & { deleted: boolean; })[] = [
    { id: VALUES.IDS.POST_RATED, creatorId: REQUESTERS.CREATOR1.id, comicId: VALUES.IDS.COMIC, tenantId: TENANTS.default.id, createdAt: NOW, deleted: false },
    { id: VALUES.IDS.POST_UNRATED, creatorId: REQUESTERS.CREATOR1.id, comicId: VALUES.IDS.COMIC, tenantId: TENANTS.default.id, createdAt: NOW, deleted: false },
    { id: VALUES.IDS.POST_EXTRA1, creatorId: REQUESTERS.CREATOR2.id, comicId: VALUES.IDS.COMIC, tenantId: TENANTS.default.id, createdAt: NOW, deleted: false },
    { id: VALUES.IDS.POST_DELETED, creatorId: REQUESTERS.CREATOR1.id, comicId: VALUES.IDS.COMIC, tenantId: TENANTS.default.id, createdAt: NOW, deleted: true },
];

const POST_METRICS: PostMetricsDataModel[] = [
    { id: VALUES.IDS.POST_RATED, postId: VALUES.IDS.POST_RATED, ratings: 1, reactions: 0, popularity: 0 },
    { id: VALUES.IDS.POST_UNRATED, postId: VALUES.IDS.POST_UNRATED, ratings: 0, reactions: 0, popularity: 0 },
    { id: VALUES.IDS.POST_EXTRA1, postId: VALUES.IDS.POST_EXTRA1, ratings: 0, reactions: 0, popularity: 0 },
    { id: VALUES.IDS.POST_DELETED, postId: VALUES.IDS.POST_DELETED, ratings: 0, reactions: 0, popularity: 0 }
];

const RATINGS: RatingDataModel[] = [
    { id: VALUES.IDS.RATING, creatorId: REQUESTERS.CREATOR1.id, postId: VALUES.IDS.POST_RATED, createdAt: NOW }
];

export const RECORDS: Record<string, RecordData[]> = { CREATORS, CREATOR_METRICS, RELATIONS, IMAGES, COMICS, POSTS, POST_METRICS, RATINGS };
