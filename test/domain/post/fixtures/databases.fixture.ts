
import { RECORD_TYPE as COMIC_RECORD_TYPE } from '^/domain/comic';
import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator';
import { RECORD_TYPE as IMAGE_RECORD_TYPE } from '^/domain/image';
import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post';
import { RECORD_TYPE as RATING_RECORD_TYPE } from '^/domain/rating';
import { RECORD_TYPE as RELATION_RECORD_TYPE } from '^/domain/relation';

import database from '^/integrations/database';

import { RECORDS } from './records.fixture';

database.connect();

async function withCreators(): Promise<void>
{
    database.clear();

    RECORDS.CREATORS.forEach(async (creator) =>
    {
        await database.createRecord(CREATOR_RECORD_TYPE, { ...creator });
    });
}

async function withPostsAndRatings(): Promise<void>
{
    database.clear();

    RECORDS.POSTS.forEach(async (post) =>
    {
        await database.createRecord(POST_RECORD_TYPE, { ...post });
    });

    RECORDS.RATINGS.forEach(async (rating) =>
    {
        await database.createRecord(RATING_RECORD_TYPE, { ...rating });
    });
}

async function withCreatorsPostsAndRelations(): Promise<void>
{
    database.clear();

    RECORDS.CREATORS.forEach(async (creator) =>
    {
        await database.createRecord(CREATOR_RECORD_TYPE, { ...creator });
    });

    RECORDS.RELATIONS.forEach(async (relation) =>
    {
        await database.createRecord(RELATION_RECORD_TYPE, { ...relation });
    });

    RECORDS.IMAGES.forEach(async (image) =>
    {
        await database.createRecord(IMAGE_RECORD_TYPE, { ...image });
    });

    RECORDS.COMICS.forEach(async (comic) =>
    {
        await database.createRecord(COMIC_RECORD_TYPE, { ...comic });
    });

    RECORDS.POSTS.forEach(async (post) =>
    {
        await database.createRecord(POST_RECORD_TYPE, { ...post });
    });

}

async function withPostsAndCreators(): Promise<void>
{
    database.clear();

    RECORDS.CREATORS.forEach(async (creator) =>
    {
        await database.createRecord(CREATOR_RECORD_TYPE, { ...creator });
    });

    RECORDS.POSTS.forEach(async (post) =>
    {
        await database.createRecord(POST_RECORD_TYPE, { ...post });
    });
}

export const DATABASES = { withCreators, withPostsAndRatings, withPostsAndCreators, withCreatorsPostsAndRelations };
