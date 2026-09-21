
import database from '^/integrations/database';
import logger from '^/integrations/logging';

import { RECORD_TYPE, type Record } from '../definitions';

import TenantNotFound from './TenantNotFound';

export default async function (origin: string): Promise<Record>
{
    const result = await database.readRecord<Record>(RECORD_TYPE, { origins: { CONTAINS: origin } });

    if (result.notFound)
    {
        logger.warn(`Tenant with origin '${origin}' could not be found.`);

        throw new TenantNotFound();
    }

    return result.record!;
}
