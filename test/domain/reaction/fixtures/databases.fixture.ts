
import { RECORD_TYPE as COMIC_RECORD_TYPE } from '^/domain/comic';
import { RECORD_TYPE as COMMENT_RECORD_TYPE } from '^/domain/comment';
import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator';
import { RECORD_TYPE as IMAGE_RECORD_TYPE } from '^/domain/image';
import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post';
import { RECORD_TYPE as RATING_RECORD_TYPE } from '^/domain/rating';
import { RECORD_TYPE as REACTION_RECORD_TYPE } from '^/domain/reaction';

import database from '^/integrations/database';

import { RECORDS } from './records.fixture';

database.connect();

async function withEverything(): Promise<void>
{
    database.clear();

    RECORDS.COMICS.forEach(async (comic) =>
    {
        await database.createRecord(COMIC_RECORD_TYPE, { ...comic });
    });

    RECORDS.COMMENTS.forEach(async (comment) =>
    {
        await database.createRecord(COMMENT_RECORD_TYPE, { ...comment });
    });

    RECORDS.CREATORS.forEach(async (creator) =>
    {
        await database.createRecord(CREATOR_RECORD_TYPE, { ...creator });
    });

    RECORDS.IMAGES.forEach(async (image) =>
    {
        await database.createRecord(IMAGE_RECORD_TYPE, { ...image });
    });

    RECORDS.POSTS.forEach(async (post) =>
    {
        await database.createRecord(POST_RECORD_TYPE, { ...post });
    });

    RECORDS.REACTIONS.forEach(async (reaction) =>
    {
        await database.createRecord(REACTION_RECORD_TYPE, { ...reaction });
    });

    RECORDS.RATINGS.forEach(async (rating) =>
    {
        await database.createRecord(RATING_RECORD_TYPE, { ...rating });
    });
}

export const DATABASES = { withEverything };
