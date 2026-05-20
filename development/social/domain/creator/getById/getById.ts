
import type { RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';
import logger from '@comify/common/integrations/logging';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';
import CreatorNotFound from './CreatorNotFound';

export default async function getById(tenantId: string, id: string): Promise<DataModel>
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

    return record as DataModel;
}
