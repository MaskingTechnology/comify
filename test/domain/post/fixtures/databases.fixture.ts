
import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator/definitions/constants';
import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post/definitions/constants';
import { RECORD_TYPE as RATING_RECORD_TYPE } from '^/domain/rating/definitions/constants';

import database from '^/integrations/database/module';

import { RECORDS } from './records.fixture';

database.connect();

async function withCreators()
{
    database.clear();

    RECORDS.CREATORS.forEach(async (creator) =>
    {
        await database.createRecord(CREATOR_RECORD_TYPE, creator);
    });

    return database;
}

async function withPostsAndRatings()
{
    database.clear();

    RECORDS.POSTS.forEach(async (post) =>
    {
        await database.createRecord(POST_RECORD_TYPE, post);
    });

    RECORDS.RATINGS.forEach(async (rating) =>
    {
        await database.createRecord(RATING_RECORD_TYPE, rating);
    });

    return database;
}

export const DATABASES = { withCreators, withPostsAndRatings };
