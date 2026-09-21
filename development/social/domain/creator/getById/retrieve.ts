
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';
import { logger } from '../integrations';

import CreatorNotFound from './CreatorNotFound';

export default async function (tenantId: string, id: string): Promise<Record>
{
    const result = await database.readRecord<Record>(RECORD_TYPE, {
        tenantId: { EQUALS: tenantId },
        id: { EQUALS: id }
    });

    if (result.notFound)
    {
        logger.warn(`Creator for tenant '${tenantId}' with id '${id}' could not be found.`);

        throw new CreatorNotFound();
    }

    return result.record!;
}
