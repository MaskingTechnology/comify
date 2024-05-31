
import database, { RecordQuery } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function retrieveOwnedData(id: string, ownerId: string): Promise<DataModel | undefined>
{
    const query: RecordQuery = {
        id: { 'EQUALS': id },
        creatorId: { 'EQUALS': ownerId },
        deleted: { 'EQUALS': false }
    };

    return database.findRecord(RECORD_TYPE, query) as Promise<DataModel | undefined>;
}
