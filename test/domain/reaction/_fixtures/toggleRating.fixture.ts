
import johnDoe from '^/domain/authentication/johnDoe';
import { RECORD_TYPE as RATING_RECORD_TYPE } from '^/domain/rating/definitions/constants';
import { RECORD_TYPE as REACTION_RECORD_TYPE } from '^/domain/reaction/definitions/constants';
import toggleRating from '^/domain/reaction/toggleRating';
import database, { RecordQuery } from '^/integrations/database/module';

const POST_ID = '1';
const COMMENT_ID = '1';
const RATING_ID = '1';
const RATED_REACTION_ID = '1';
const UNRATED_REACTION_ID = '2';
const NOT_EXISTING_REACTION_ID = '3';

const RATING_RECORD = { id: RATING_ID, creatorId: johnDoe.id, postId: undefined, reactionId: RATED_REACTION_ID, createdAt: new Date() };
const RATED_REACTION_RECORD = { id: RATED_REACTION_ID, creatorId: johnDoe.id, postId: POST_ID, comicId: undefined, commentId: COMMENT_ID, ratingCount: 10, createdAt: new Date() };
const UNRATED_REACTION_RECORD = { id: UNRATED_REACTION_ID, creatorId: johnDoe.id, postId: POST_ID, comicId: undefined, commentId: COMMENT_ID, ratingCount: 0, createdAt: new Date() };

const ratingQuery: RecordQuery = {
    creatorId: { EQUALS: johnDoe.id },
    postId: { EQUALS: NOT_EXISTING_REACTION_ID }
};

async function createDatabase()
{
    if (database.connected)
    {
        await database.disconnect();
    }

    await database.connect();
    await database.createRecord(REACTION_RECORD_TYPE, RATED_REACTION_RECORD);
    await database.createRecord(REACTION_RECORD_TYPE, UNRATED_REACTION_RECORD);
    await database.createRecord(RATING_RECORD_TYPE, RATING_RECORD);

    return database;
}

export { NOT_EXISTING_REACTION_ID, RATED_REACTION_ID, RATING_ID, RATING_RECORD_TYPE, UNRATED_REACTION_ID, createDatabase, johnDoe, ratingQuery, toggleRating };

