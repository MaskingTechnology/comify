
import database, { RecordQuery } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function retrieveData(followingId: string, offset: number, limit: number): Promise<DataModel[]>
{
    const query: RecordQuery =
    {
        followingId: { EQUALS: followingId }
    };

    return database.searchRecords(RECORD_TYPE, query, undefined, undefined, limit, offset) as Promise<DataModel[]>;
}
