
import type { RecordQuery } from '@theshelf/database';
import database from '@theshelf/database';
import logger from '@theshelf/logging';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

import TenantNotFound from './TenantNotFound';

export default async function getByOrigin(origin: string): Promise<DataModel>
{
    const query: RecordQuery =
    {
        origins: { CONTAINS: origin }
    };

    const record = await database.readRecord(RECORD_TYPE, query);

    if (record === undefined)
    {
        logger.logWarn(`Tenant with origin '${origin}' could not be found.`);

        throw new TenantNotFound();
    }

    return record as DataModel;
}
