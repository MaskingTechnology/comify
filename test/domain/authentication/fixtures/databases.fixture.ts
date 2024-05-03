
import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator/definitions/constants';
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
}

export const DATABASES = { withCreators };
