
import johnDoe from '^/domain/authentication/johnDoe';
import { RecordData } from '^/integrations/database/module';

import { VALUES } from './values.fixture';

export const RECORDS: Record<string, Array<RecordData>> =
{
    CREATORS: [
        { id: VALUES.IDS.CREATOR, fullName: VALUES.FULL_NAMES.CREATOR, nickname: VALUES.NICKNAMES.CREATOR, email: VALUES.EMAILS.CREATOR }
    ],

    POSTS: [
        { id: VALUES.IDS.POST_RATED, creatorId: johnDoe.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 10, reactionCount: 0 },
        { id: VALUES.IDS.POST_UNRATED, creatorId: johnDoe.id, comicId: VALUES.IDS.COMIC, createdAt: new Date(), ratingCount: 10, reactionCount: 0 }
    ],

    RATINGS: [
        { id: VALUES.IDS.RATING, creatorId: johnDoe.id, postId: VALUES.IDS.POST_RATED, reactionId: undefined, createdAt: new Date() }
    ]
};
