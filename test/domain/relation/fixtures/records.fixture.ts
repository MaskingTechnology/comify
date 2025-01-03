
import { RecordData } from '^/integrations/database/module';

import { VALUES } from './values.fixture';

const DEFAULT_DATA = { portraitId: undefined, postCount: 0, followerCount: 0, followingCount: 0 };

export const RECORDS: Record<string, RecordData[]> =
{
    CREATORS: [
        { id: VALUES.IDS.CREATOR1, fullName: 'Creator 1', nickname: 'creator1', email: 'creator1@mail.com', joinedAt: new Date(2024, 5, 23), popularity: 0, ...DEFAULT_DATA },
        { id: VALUES.IDS.CREATOR2, fullName: 'Creator 2', nickname: 'creator2', email: 'creator2@mail.com', joinedAt: new Date(2024, 7, 11), popularity: 0, ...DEFAULT_DATA },
        { id: VALUES.IDS.CREATOR3, fullName: 'Creator 3', nickname: 'creator3', email: 'creator3@mail.com', joinedAt: new Date(2024, 1, 24), popularity: 0, ...DEFAULT_DATA },
        { id: VALUES.IDS.CREATOR4, fullName: 'Creator 4', nickname: 'creator4', email: 'creator4@mail.com', joinedAt: new Date(2024, 2, 12), popularity: 2, ...DEFAULT_DATA },
        { id: VALUES.IDS.CREATOR5, fullName: 'Creator five', nickname: 'creator5', email: 'creator5@mail.com', joinedAt: new Date(2024, 4, 9), popularity: 1, ...DEFAULT_DATA },
        { id: VALUES.IDS.CREATOR6, fullName: 'Creator 6', nickname: 'not_five', email: 'creator6@mail.com', joinedAt: new Date(2024, 3, 18), popularity: 3, ...DEFAULT_DATA }
    ],

    RELATIONS: [
        { id: VALUES.IDS.RELATION1, followerId: VALUES.IDS.CREATOR1, followingId: VALUES.IDS.CREATOR2 },
        { id: VALUES.IDS.RELATION2, followerId: VALUES.IDS.CREATOR1, followingId: VALUES.IDS.CREATOR3 },
        { id: VALUES.IDS.RELATION3, followerId: VALUES.IDS.CREATOR2, followingId: VALUES.IDS.CREATOR3 },
        { id: VALUES.IDS.RELATION4, followerId: VALUES.IDS.CREATOR3, followingId: VALUES.IDS.CREATOR4 },
        { id: VALUES.IDS.RELATION5, followerId: VALUES.IDS.CREATOR4, followingId: VALUES.IDS.CREATOR5 },
        { id: VALUES.IDS.RELATION6, followerId: VALUES.IDS.CREATOR5, followingId: VALUES.IDS.CREATOR6 },
        { id: VALUES.IDS.RELATION7, followerId: VALUES.IDS.CREATOR6, followingId: VALUES.IDS.CREATOR4 }
    ]
};
