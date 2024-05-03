
import johnDoe from '^/domain/authentication/johnDoe';
import { RecordData } from '^/integrations/database/module';

import { VALUES } from './values.fixture';

export const RECORDS: Record<string, Array<RecordData>> =
{
    CREATORS: [
        { id: VALUES.CREATOR_ID, fullName: VALUES.CREATOR_FULL_NAME, nickname: VALUES.CREATOR_NICKNAME, email: VALUES.CREATOR_EMAIL }
    ],

    POSTS: [
        { id: VALUES.POST_RATED_ID, creatorId: johnDoe.id, comicId: VALUES.COMIC_ID, createdAt: new Date(), ratingCount: 10, reactionCount: 0 },
        { id: VALUES.POST_UNRATED_ID, creatorId: johnDoe.id, comicId: VALUES.COMIC_ID, createdAt: new Date(), ratingCount: 10, reactionCount: 0 }
    ],

    RATINGS: [
        { id: VALUES.RATING_ID, creatorId: johnDoe.id, postId: VALUES.POST_RATED_ID, reactionId: undefined, createdAt: new Date() }
    ]
};
