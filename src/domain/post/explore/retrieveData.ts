
import database, { RecordQuery } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function retrieveData(excludedCreatorIds: string[]): Promise<DataModel[]>
{
    const query: RecordQuery =
    {
        creatorId: { NOT_IN: excludedCreatorIds },
        deleted: { 'EQUALS': false }
    };

    return database.searchRecords(RECORD_TYPE, query) as Promise<DataModel[]>;
}
