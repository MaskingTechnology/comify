
import database, { type RecordQuery } from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';
import CreatorNotFound from './CreatorNotFound';

export default async function getById(tenantId: string, id: string): Promise<DataModel>
{
    const query: RecordQuery = {
        tenantId: { 'EQUALS': tenantId },
        id: { 'EQUALS': id }
    };

    const creator = await database.findRecord(RECORD_TYPE, query);

    if (creator === undefined)
    {
        throw new CreatorNotFound(tenantId, id);
    }

    return creator as DataModel;
}
