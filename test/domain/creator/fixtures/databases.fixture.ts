
import database from '^/integrations/database';

import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator';

import { RECORDS } from './records.fixture';

database.connect();

async function withEverything(): Promise<void>
{
    database.clear();

    const promises = RECORDS.CREATORS.map(creator => database.createRecord(CREATOR_RECORD_TYPE, { ...creator }));

    await Promise.all(promises);
}

export const DATABASES = { withEverything };
