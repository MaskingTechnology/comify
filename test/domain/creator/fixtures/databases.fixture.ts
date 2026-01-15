
import { MemoryDriver } from '@theshelf/database';

import database, { driver } from '^/integrations/database';

import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator';

import { RECORDS } from './records.fixture';

async function withEverything(): Promise<void>
{
    (driver as MemoryDriver).clear();

    const promises = RECORDS.CREATORS.map(creator => database.createRecord(CREATOR_RECORD_TYPE, { ...creator }));

    await Promise.all(promises);
}

export const DATABASES = { withEverything };
