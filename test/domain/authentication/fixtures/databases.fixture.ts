
import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator';
import database from '^/integrations/database';

import { RECORDS } from './records.fixture';

database.connect();

async function withCreators(): Promise<void>
{
    database.clear();

    const promises = RECORDS.CREATORS.map(creator => database.createRecord(CREATOR_RECORD_TYPE, creator));

    await Promise.all(promises);
}

export const DATABASES = { withCreators };
