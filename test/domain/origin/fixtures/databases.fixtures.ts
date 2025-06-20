
import database from '^/integrations/database';

import { RECORD_TYPE as ORIGIN_RECORD_TYPE } from '^/domain/origin';

import { RECORDS } from './records.fixtures';

database.connect();

async function origins(): Promise<void>
{
    RECORDS.ORIGINS.map(origins => database.createRecord(ORIGIN_RECORD_TYPE, { ...origins }));
}

export const DATABASES = { origins };
