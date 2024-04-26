
import johnDoe from '^/domain/authentication/johnDoe';
import { RECORD_TYPE as COMIC_RECORD_TYPE } from '^/domain/comic/definitions/constants';
import { RECORD_TYPE as COMMENT_RECORD_TYPE } from '^/domain/comment/definitions/constants';
import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator/definitions/constants';
import { RECORD_TYPE as IMAGE_RECORD_TYPE } from '^/domain/image/definitions/constants';
import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post/definitions/constants';
import createComicReaction from '^/domain/reaction/createComic';
import createCommentReaction from '^/domain/reaction/createComment';
import { RECORD_TYPE as REACTION_RECORD_TYPE } from '^/domain/reaction/definitions/constants';
import database from '^/integrations/database/module';
import fileStorage from '^/integrations/filestorage/module';

const COMIC_ID = '1';
const POST_ID = '1';
const NOT_EXISTING_POST_ID = '2';

const POST_RECORD = { id: POST_ID, creatorId: johnDoe.id, comicId: COMIC_ID, createdAt: new Date(), ratingCount: 0, reactionCount: 0 };
const CREATOR_RECORD = { id: johnDoe.id, fullName: 'John Doe', nickname: 'JohnDoe', email: 'test@example.com' };

const EXISTING_REQUESTER = johnDoe;
const COMMENT_MESSAGE = 'Test message';
const COMIC_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR42mL8//8/AyUYIIgBh';

async function createDatabase()
{
    if (database.connected)
    {
        await database.disconnect();
    }

    await database.connect();
    await database.createRecord(POST_RECORD_TYPE, POST_RECORD);
    await database.createRecord(CREATOR_RECORD_TYPE, CREATOR_RECORD);

    return database;
}

async function createFileStorage()
{
    if (fileStorage.connected)
    {
        await fileStorage.disconnect();
    }

    await fileStorage.connect();

    return fileStorage;
}


export { COMIC_DATA_URL, COMIC_RECORD_TYPE, COMMENT_MESSAGE, COMMENT_RECORD_TYPE, EXISTING_REQUESTER, IMAGE_RECORD_TYPE, NOT_EXISTING_POST_ID, POST_ID, POST_RECORD_TYPE, REACTION_RECORD_TYPE, createComicReaction, createCommentReaction, createDatabase, createFileStorage };

