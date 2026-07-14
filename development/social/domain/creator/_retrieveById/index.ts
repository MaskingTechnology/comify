
import type { RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';
import logger from '@comify/common/integrations/logging';

import { RECORD_TYPE, type Data } from '../definitions';
import CreatorNotFound from './CreatorNotFound';

export default async function run(tenantId: string, id: string): Promise<Data>
{
    const query: RecordQuery = {
        tenantId: { EQUALS: tenantId },
        id: { EQUALS: id }
    };

    const record = await database.readRecord(RECORD_TYPE, query);

    if (record === undefined)
    {
        logger.warn(`Creator for tenant '${tenantId}' with id '${id}' could not be found.`);

        throw new CreatorNotFound();
    }

    return record as Data;
}

export { CreatorNotFound };
