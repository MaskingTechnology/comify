
import Requester from '^/domain/authentication/Requester';
import johnDoe from '^/domain/authentication/johnDoe';
import { RECORD_TYPE as COMIC_RECORD_TYPE } from '^/domain/comic/definitions/constants';
import { RECORD_TYPE as COMMENT_RECORD_TYPE } from '^/domain/comment/definitions/constants';
import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator/definitions/constants';
import { RECORD_TYPE as IMAGE_RECORD_TYPE } from '^/domain/image/definitions/constants';
import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post/definitions/constants';
import createComicReaction from '^/domain/reaction/createComic';
import createCommentReaction from '^/domain/reaction/createComment';
import { RECORD_TYPE as REACTION_RECORD_TYPE } from '^/domain/reaction/definitions/constants';
import ReactionNotFound from '^/domain/reaction/errors/ReactionNotFound';
import getByPost from '^/domain/reaction/getByPost';
import remove from '^/domain/reaction/remove';
import database from '^/integrations/database/module';
import fileStorage from '^/integrations/filestorage/module';

const COMIC_ID = '1';
const POST_ID = '1';
const NOT_EXISTING_POST_ID = '2';
const DELETED_REACTION_ID = '1';
const COMIC_REACTION_ID = '2';
const COMMENT_REACTION_ID = '3';
const REACTION_COMIC_ID = '4';
const REACTION_COMMENT_ID = '5';
const IMAGE_ID = '1';
const IMAGE_STORAGE_KEY = 'comic/1';

const COMMENT_MESSAGE = 'Test message';
const COMIC_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEElEQVR42mL8//8/AyUYIIgBh';

const POST_RECORD = { id: POST_ID, creatorId: johnDoe.id, comicId: COMIC_ID, createdAt: new Date(), ratingCount: 0, reactionCount: 0 };
const CREATOR_RECORD = { id: johnDoe.id, fullName: 'John Doe', nickname: 'JohnDoe', email: 'test@example.com' };
const DELETED_REACTION_RECORD = { id: DELETED_REACTION_ID, creatorId: johnDoe.id, postId: POST_ID, comicId: undefined, commentId: undefined, ratingCount: 0, createdAt: new Date(), deleted: true };
const COMIC_REACTION_RECORD = { id: COMIC_REACTION_ID, creatorId: johnDoe.id, postId: POST_ID, comicId: REACTION_COMIC_ID, commentId: undefined, ratingCount: 0, createdAt: new Date(), deleted: false };
const COMMENT_REACTION_RECORD = { id: COMMENT_REACTION_ID, creatorId: johnDoe.id, postId: POST_ID, comicId: undefined, commentId: REACTION_COMMENT_ID, ratingCount: 0, createdAt: new Date(), deleted: false };
const COMIC_RECORD = { id: REACTION_COMIC_ID, imageId: IMAGE_ID };
const COMMENT_RECORD = { id: REACTION_COMMENT_ID, message: COMMENT_MESSAGE };
const IMAGE_RECORD = { id: IMAGE_ID, storageKey: IMAGE_STORAGE_KEY, filename: 'dataUrl', mimeType: 'image/jpeg' };

const IMAGE_FILE = Buffer.from('Test data');

const EXISTING_REQUESTER = johnDoe;
const SOME_OTHER_REQUESTER = new Requester('1', 'Some Other', 'someOther');

async function createDatabase()
{
    if (database.connected)
    {
        await database.disconnect();
    }

    await database.connect();
    await database.createRecord(POST_RECORD_TYPE, POST_RECORD);
    await database.createRecord(CREATOR_RECORD_TYPE, CREATOR_RECORD);
    await database.createRecord(REACTION_RECORD_TYPE, DELETED_REACTION_RECORD);
    await database.createRecord(REACTION_RECORD_TYPE, COMIC_REACTION_RECORD);
    await database.createRecord(REACTION_RECORD_TYPE, COMMENT_REACTION_RECORD);
    await database.createRecord(COMIC_RECORD_TYPE, COMIC_RECORD);
    await database.createRecord(COMMENT_RECORD_TYPE, COMMENT_RECORD);
    await database.createRecord(IMAGE_RECORD_TYPE, IMAGE_RECORD);

    return database;
}

async function createFileStorage()
{
    if (fileStorage.connected)
    {
        await fileStorage.disconnect();
    }

    await fileStorage.connect();
    await fileStorage.writeFile(IMAGE_STORAGE_KEY, IMAGE_FILE);

    return fileStorage;
}

export
{
    COMIC_DATA_URL, COMIC_REACTION_ID, COMIC_RECORD_TYPE, COMMENT_MESSAGE, COMMENT_REACTION_ID,
    COMMENT_RECORD_TYPE, DELETED_REACTION_ID, EXISTING_REQUESTER, IMAGE_RECORD_TYPE, NOT_EXISTING_POST_ID,
    POST_ID, POST_RECORD_TYPE, REACTION_COMIC_ID, REACTION_COMMENT_ID, REACTION_RECORD_TYPE,
    ReactionNotFound, SOME_OTHER_REQUESTER, createComicReaction, createCommentReaction, createDatabase,
    createFileStorage, getByPost, remove
};
