
import { RecordData } from '^/integrations/database/module';

import { REQUESTERS } from './requesters.fixture';
import { VALUES } from './values.fixture';

export const RECORDS: Record<string, Array<RecordData>> =
{
    CREATORS: [
        { id: VALUES.IDS.CREATOR, fullName: VALUES.FULL_NAMES.CREATOR, nickname: VALUES.NICKNAMES.CREATOR, email: VALUES.EMAILS.CREATOR }
    ],

    POSTS: [
        { id: VALUES.IDS.POST_RATED, creatorId: REQUESTERS.CREATOR.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 10, reactionCount: 0, deleted: false },
        { id: VALUES.IDS.POST_UNRATED, creatorId: REQUESTERS.CREATOR.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 10, reactionCount: 0, deleted: false },
        { id: VALUES.IDS.POST_DELETED, creatorId: REQUESTERS.CREATOR.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 10, reactionCount: 0, deleted: true },
    ],

    RATINGS: [
        { id: VALUES.IDS.RATING, creatorId: REQUESTERS.CREATOR.id, postId: VALUES.IDS.POST_RATED, reactionId: undefined, createdAt: new Date() }
    ]
};
