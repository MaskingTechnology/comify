
import johnDoe from '../../../../src/domain/authentication/johnDoe';
import { RECORD_TYPE as COMMENT_RECORD_TYPE } from '../../../../src/domain/comment/definitions/constants';
import { RECORD_TYPE as POST_RECORD_TYPE } from '../../../../src/domain/post/definitions/constants';
import create from '../../../../src/domain/reaction/create';
import { RECORD_TYPE as REACTION_RECORD_TYPE } from '../../../../src/domain/reaction/definitions/constants';
import database from '../../../../src/integrations/database/module';

const COMIC_ID = '1';
const POST_ID = '1';
const NOT_EXISTING_POST_ID = '2';

const POST_RECORD = { id: POST_ID, creatorId: johnDoe.id, comicId: COMIC_ID, createdAt: new Date(), ratingCount: 0, reactionCount: 0 };

const EXISTING_REQUESTER = johnDoe;
const REACTION_MESSAGE = 'Test message';

async function createDatabase()
{
    if (database.connected)
    {
        await database.disconnect();
    }

    await database.connect();
    await database.createRecord(POST_RECORD_TYPE, POST_RECORD);

    return database;
}

export { COMMENT_RECORD_TYPE, EXISTING_REQUESTER, NOT_EXISTING_POST_ID, POST_ID, POST_RECORD_TYPE, REACTION_MESSAGE, REACTION_RECORD_TYPE, create, createDatabase };

