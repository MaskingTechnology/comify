
import type { RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { BaseData } from '../definitions';

export default async function retrieveData(followingId: string, limit: number, offset: number): Promise<DataModel[]>
{
    const query: RecordQuery =
    {
        followingId: { EQUALS: followingId }
    };

    return database.searchRecords(RECORD_TYPE, query, undefined, undefined, limit, offset) as Promise<DataModel[]>;
}
