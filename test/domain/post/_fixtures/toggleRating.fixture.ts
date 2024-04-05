
import johnDoe from '../../../../src/domain/authentication/johnDoe';
import { RECORD_TYPE as POST_RECORD_TYPE } from '../../../../src/domain/post/definitions/constants';
import toggleRating from '../../../../src/domain/post/toggleRating';
import { RECORD_TYPE as RATING_RECORD_TYPE } from '../../../../src/domain/rating/definitions/constants';
import database from '../../../../src/integrations/database/module';

const RATING_ID = '1';
const COMIC_ID = '1';
const RATED_POST_ID = '1';
const UNRATED_POST_ID = '2';
const RATING_RECORD = { id: RATING_ID, creatorId: johnDoe.id, postId: RATED_POST_ID, reactionId: undefined, createdAt: new Date() };
const RATED_POST_RECORD = { id: RATED_POST_ID, creatorId: johnDoe.id, comicId: COMIC_ID, createdAt: new Date(), ratingCount: 10, reactionCount: 0 };
const UNRATED_POST_RECORD = { id: UNRATED_POST_ID, creatorId: johnDoe.id, comicId: COMIC_ID, createdAt: new Date(), ratingCount: 10, reactionCount: 0 };

async function createDatabase()
{
    if (database.connected)
    {
        await database.disconnect();
    }

    await database.connect();
    await database.createRecord(POST_RECORD_TYPE, RATED_POST_RECORD);
    await database.createRecord(POST_RECORD_TYPE, UNRATED_POST_RECORD);
    await database.createRecord(RATING_RECORD_TYPE, RATING_RECORD);

    return database;
}

export { RATED_POST_ID, RATING_ID, RATING_RECORD_TYPE, UNRATED_POST_ID, createDatabase, johnDoe, toggleRating };
