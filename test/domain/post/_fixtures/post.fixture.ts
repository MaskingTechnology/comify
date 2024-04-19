
import Requester from '../../../../src/domain/authentication/Requester';
import johnDoe from '../../../../src/domain/authentication/johnDoe';
import { RECORD_TYPE as COMIC_RECORD_TYPE } from '../../../../src/domain/comic/definitions/constants';
import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '../../../../src/domain/creator/definitions/constants';
import { RECORD_TYPE as IMAGE_RECORD_TYPE } from '../../../../src/domain/image/definitions/constants';
import create from '../../../../src/domain/post/create';
import { RECORD_TYPE as POST_RECORD_TYPE } from '../../../../src/domain/post/definitions/constants';
import database from '../../../../src/integrations/database/module';
import fileStorage from '../../../../src/integrations/filestorage/module';

const CREATOR_ID = '1';
const CREATOR_FULL_NAME = 'Test Creator';
const CREATOR_NICKNAME = 'testcreator';
const CREATOR_EMAIL = 'test@example.com';

const UNKNOWN_REQUESTER = johnDoe;
const EXISTING_REQUESTER = new Requester(CREATOR_ID, CREATOR_FULL_NAME, CREATOR_NICKNAME);
const CREATOR_RECORD = { id: CREATOR_ID, fullName: CREATOR_FULL_NAME, nickname: CREATOR_NICKNAME, email: CREATOR_EMAIL };

const DATA_URL = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR42mL8//8/AyUYIIgBh';

async function createDatabase()
{
    if (database.connected)
    {
        await database.disconnect();
    }

    await database.connect();
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

export { COMIC_RECORD_TYPE, DATA_URL, EXISTING_REQUESTER, IMAGE_RECORD_TYPE, POST_RECORD_TYPE, UNKNOWN_REQUESTER, create, createDatabase, createFileStorage };
