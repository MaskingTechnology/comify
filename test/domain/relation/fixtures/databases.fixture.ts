
import database from '^/integrations/database';

import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator';
import { RECORD_TYPE as RELATION_RECORD_TYPE } from '^/domain/relation';

import { RECORDS } from './records.fixture';

database.connect();

async function withEverything(): Promise<void>
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
}

export const DATABASES = { withEverything };
