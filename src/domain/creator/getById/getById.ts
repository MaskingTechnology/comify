
import database, { type RecordQuery } from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';
import CreatorNotFound from './CreatorNotFound';

export default async function getById(id: string, tenantId: string): Promise<DataModel>
{
    const query: RecordQuery =
    {
        id: { 'EQUALS': id },
        tenantId: { 'EQUALS': tenantId }
    };

    const creator = await database.findRecord(RECORD_TYPE, query);

    if (creator === undefined)
    {
        throw new CreatorNotFound(id, tenantId);
    }

    return creator as DataModel;
}
