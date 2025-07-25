
import type { RecordData } from '^/integrations/database';

import type { DataModel as CreatorDataModel } from '^/domain/creator';
import type { DataModel as CreatorMetricsDataModel } from '^/domain/creator.metrics';
import type { DataModel as RelationDataModel } from '^/domain/relation';

import { TENANTS } from './tenants.fixture';
import { VALUES } from './values.fixture';

const CREATORS: CreatorDataModel[] = [
    { id: VALUES.IDS.CREATOR1, fullName: 'Creator 1', nickname: 'creator1', email: 'creator1@mail.com', joinedAt: new Date(2024, 5, 23).toISOString(), tenantId: TENANTS.default.id, portraitId: undefined },
    { id: VALUES.IDS.CREATOR2, fullName: 'Creator 2', nickname: 'creator2', email: 'creator2@mail.com', joinedAt: new Date(2024, 7, 11).toISOString(), tenantId: TENANTS.default.id, portraitId: undefined },
    { id: VALUES.IDS.CREATOR3, fullName: 'Creator 3', nickname: 'creator3', email: 'creator3@mail.com', joinedAt: new Date(2024, 1, 24).toISOString(), tenantId: TENANTS.default.id, portraitId: undefined },
    { id: VALUES.IDS.CREATOR4, fullName: 'Creator 4', nickname: 'creator4', email: 'creator4@mail.com', joinedAt: new Date(2024, 2, 12).toISOString(), tenantId: TENANTS.default.id, portraitId: undefined },
    { id: VALUES.IDS.CREATOR5, fullName: 'Creator five', nickname: 'creator5', email: 'creator5@mail.com', joinedAt: new Date(2024, 4, 9).toISOString(), tenantId: TENANTS.default.id, portraitId: undefined },
    { id: VALUES.IDS.CREATOR6, fullName: 'Creator 6', nickname: 'not_five', email: 'creator6@mail.com', joinedAt: new Date(2024, 3, 18).toISOString(), tenantId: TENANTS.default.id, portraitId: undefined }
];

const CREATOR_METRICS: CreatorMetricsDataModel[] = [
    { id: VALUES.IDS.CREATOR1, creatorId: VALUES.IDS.CREATOR1, posts: 0, followers: 0, following: 0, popularity: 0 },
    { id: VALUES.IDS.CREATOR2, creatorId: VALUES.IDS.CREATOR2, posts: 0, followers: 0, following: 0, popularity: 0 },
    { id: VALUES.IDS.CREATOR3, creatorId: VALUES.IDS.CREATOR3, posts: 0, followers: 0, following: 0, popularity: 0 },
    { id: VALUES.IDS.CREATOR4, creatorId: VALUES.IDS.CREATOR4, posts: 0, followers: 0, following: 0, popularity: 0 },
    { id: VALUES.IDS.CREATOR5, creatorId: VALUES.IDS.CREATOR5, posts: 0, followers: 0, following: 0, popularity: 0 },
    { id: VALUES.IDS.CREATOR6, creatorId: VALUES.IDS.CREATOR6, posts: 0, followers: 0, following: 0, popularity: 0 }
];

const RELATIONS: RelationDataModel[] = [
    { id: VALUES.IDS.RELATION1, followerId: VALUES.IDS.CREATOR1, followingId: VALUES.IDS.CREATOR2 },
    { id: VALUES.IDS.RELATION2, followerId: VALUES.IDS.CREATOR1, followingId: VALUES.IDS.CREATOR3 },
    { id: VALUES.IDS.RELATION3, followerId: VALUES.IDS.CREATOR2, followingId: VALUES.IDS.CREATOR3 },
    { id: VALUES.IDS.RELATION4, followerId: VALUES.IDS.CREATOR3, followingId: VALUES.IDS.CREATOR4 },
    { id: VALUES.IDS.RELATION5, followerId: VALUES.IDS.CREATOR4, followingId: VALUES.IDS.CREATOR5 },
    { id: VALUES.IDS.RELATION6, followerId: VALUES.IDS.CREATOR5, followingId: VALUES.IDS.CREATOR6 },
    { id: VALUES.IDS.RELATION7, followerId: VALUES.IDS.CREATOR6, followingId: VALUES.IDS.CREATOR4 }
];

export const RECORDS: Record<string, RecordData[]> = { CREATORS, CREATOR_METRICS, RELATIONS };
