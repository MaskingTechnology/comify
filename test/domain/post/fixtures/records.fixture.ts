
import { RecordData } from '^/integrations/database/module';

import { REQUESTERS } from './requesters.fixture';
import { VALUES } from './values.fixture';

export const RECORDS: Record<string, Array<RecordData>> =
{
    CREATORS: [
        { id: VALUES.IDS.CREATOR1, fullName: VALUES.FULL_NAMES.CREATOR1, nickname: VALUES.NICKNAMES.CREATOR1, email: VALUES.EMAILS.CREATOR1 },
        { id: VALUES.IDS.CREATOR2, fullName: VALUES.FULL_NAMES.CREATOR2, nickname: VALUES.NICKNAMES.CREATOR2, email: VALUES.EMAILS.CREATOR2 },
        { id: VALUES.IDS.CREATOR3, fullName: VALUES.FULL_NAMES.CREATOR3, nickname: VALUES.NICKNAMES.CREATOR3, email: VALUES.EMAILS.CREATOR3 },
        { id: VALUES.IDS.CREATOR4, fullName: VALUES.FULL_NAMES.CREATOR4, nickname: VALUES.NICKNAMES.CREATOR4, email: VALUES.EMAILS.CREATOR4 },
    ],

    RELATIONS: [
        { id: VALUES.IDS.RELATION1, followerId: VALUES.IDS.CREATOR1, followingId: VALUES.IDS.CREATOR3 },
        { id: VALUES.IDS.RELATION2, followerId: VALUES.IDS.CREATOR2, followingId: VALUES.IDS.CREATOR1 },
        { id: VALUES.IDS.RELATION3, followerId: VALUES.IDS.CREATOR2, followingId: VALUES.IDS.CREATOR3 },
        { id: VALUES.IDS.RELATION4, followerId: VALUES.IDS.CREATOR3, followingId: VALUES.IDS.CREATOR1 },
    ],

    POSTS: [
        { id: VALUES.IDS.POST_RATED, creatorId: REQUESTERS.CREATOR1.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 10, reactionCount: 0, deleted: false },
        { id: VALUES.IDS.POST_UNRATED, creatorId: REQUESTERS.CREATOR1.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 10, reactionCount: 0, deleted: false },
        { id: VALUES.IDS.POST_DELETED, creatorId: REQUESTERS.CREATOR1.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 10, reactionCount: 0, deleted: true },
        { id: VALUES.IDS.POST_EXTRA1, creatorId: REQUESTERS.CREATOR2.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 10, reactionCount: 0, deleted: false },
        { id: VALUES.IDS.POST_EXTRA2, creatorId: REQUESTERS.CREATOR3.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 10, reactionCount: 0, deleted: false },
    ],

    RATINGS: [
        { id: VALUES.IDS.RATING, creatorId: REQUESTERS.CREATOR1.id, postId: VALUES.IDS.POST_RATED, reactionId: undefined, createdAt: new Date() }
    ]
};
