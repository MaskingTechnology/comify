
import database from '^/integrations/database';

import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator';

import { RECORDS } from './records.fixture';

database.connect();

async function withEverything(): Promise<void>
{
    database.clear();

    RECORDS.CREATORS.forEach(async (creator) =>
    {
        await database.createRecord(CREATOR_RECORD_TYPE, { ...creator });
    });
}

export const DATABASES = { withEverything };
