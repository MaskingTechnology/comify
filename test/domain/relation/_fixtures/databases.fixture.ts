
import database from '^/integrations/database/module';

import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator/definitions/constants';
import { RECORD_TYPE as RELATION_RECORD_TYPE } from '^/domain/relation/definitions/constants';

import { RECORDS } from './records.fixture';

database.connect();

async function withEverything()
{
    database.clear();

    RECORDS.CREATORS.forEach(async (creator) =>
    {
        await database.createRecord(CREATOR_RECORD_TYPE, creator);
    });

    RECORDS.RELATIONS.forEach(async (relation) =>
    {
        await database.createRecord(RELATION_RECORD_TYPE, relation);
    });

    return database;
}

export const DATABASES = { withEverything };
