
import { RecordData } from '^/integrations/database';

import { DataModel as ComicDataModel } from '^/domain/comic';
import { DataModel as CreatorDataModel } from '^/domain/creator';
import { DataModel as CreatorMetricsDataModel } from '^/domain/creator.metrics';
import { DataModel as ImageDataModel } from '^/domain/image';
import { DataModel as PostDataModel } from '^/domain/post';
import { DataModel as PostMetricsDataModel } from '^/domain/post.metrics';
import { DataModel as RatingDataModel } from '^/domain/rating';
import { DataModel as RelationDataModel } from '^/domain/relation';

import { REQUESTERS } from './requesters.fixture';
import { VALUES } from './values.fixture';

const NOW = new Date().toISOString();

const CREATORS: CreatorDataModel[] = [
    { id: VALUES.IDS.CREATOR1, fullName: VALUES.FULL_NAMES.CREATOR1, nickname: VALUES.NICKNAMES.CREATOR1, email: VALUES.EMAILS.CREATOR1, joinedAt: NOW },
    { id: VALUES.IDS.CREATOR2, fullName: VALUES.FULL_NAMES.CREATOR2, nickname: VALUES.NICKNAMES.CREATOR2, email: VALUES.EMAILS.CREATOR2, joinedAt: NOW }
];

const CREATOR_METRICS: CreatorMetricsDataModel[] = [
    { id: VALUES.IDS.CREATOR1, creatorId: VALUES.IDS.CREATOR1, postCount: 0, followerCount: 0, followingCount: 0, popularity: 0 },
    { id: VALUES.IDS.CREATOR2, creatorId: VALUES.IDS.CREATOR2, postCount: 0, followerCount: 0, followingCount: 0, popularity: 0 }
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
    { id: VALUES.IDS.POST_RATED, creatorId: REQUESTERS.CREATOR1.id, comicId: VALUES.IDS.COMIC, createdAt: NOW, deleted: false },
    { id: VALUES.IDS.POST_UNRATED, creatorId: REQUESTERS.CREATOR1.id, comicId: VALUES.IDS.COMIC, createdAt: NOW, deleted: false },
    { id: VALUES.IDS.POST_EXTRA1, creatorId: REQUESTERS.CREATOR2.id, comicId: VALUES.IDS.COMIC, createdAt: NOW, deleted: false },
    { id: VALUES.IDS.POST_DELETED, creatorId: REQUESTERS.CREATOR1.id, comicId: VALUES.IDS.COMIC, createdAt: NOW, deleted: true },
];

const POST_METRICS: PostMetricsDataModel[] = [
    { id: VALUES.IDS.POST_RATED, postId: VALUES.IDS.POST_RATED, ratingCount: 1, reactionCount: 0, popularity: 0 },
    { id: VALUES.IDS.POST_UNRATED, postId: VALUES.IDS.POST_UNRATED, ratingCount: 0, reactionCount: 0, popularity: 0 },
    { id: VALUES.IDS.POST_EXTRA1, postId: VALUES.IDS.POST_EXTRA1, ratingCount: 0, reactionCount: 0, popularity: 0 },
    { id: VALUES.IDS.POST_DELETED, postId: VALUES.IDS.POST_DELETED, ratingCount: 0, reactionCount: 0, popularity: 0 }
];

const RATINGS: RatingDataModel[] = [
    { id: VALUES.IDS.RATING, creatorId: REQUESTERS.CREATOR1.id, postId: VALUES.IDS.POST_RATED, createdAt: NOW }
];

export const RECORDS: Record<string, RecordData[]> = { CREATORS, CREATOR_METRICS, RELATIONS, IMAGES, COMICS, POSTS, POST_METRICS, RATINGS };
