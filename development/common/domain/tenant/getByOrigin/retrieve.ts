
import type { RecordQuery } from '@theshelf/database';

import database from '^/integrations/database';
import logger from '^/integrations/logging';

import { RECORD_TYPE, type Data } from '../definitions';

import TenantNotFound from './TenantNotFound';

export default async function retrieve(origin: string): Promise<Data>
{
    const query: RecordQuery =
    {
        origins: { CONTAINS: origin }
    };

    const record = await database.readRecord(RECORD_TYPE, query);

    if (record === undefined)
    {
        logger.warn(`Tenant with origin '${origin}' could not be found.`);

        throw new TenantNotFound();
    }

    return record as Data;
}
