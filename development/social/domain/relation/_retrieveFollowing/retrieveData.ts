
import type { RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Data } from '../definitions';

export default async function retrieveData(followerId: string, limit: number | undefined = undefined, offset: number | undefined = undefined): Promise<Data[]>
{
    const query: RecordQuery =
    {
        followerId: { EQUALS: followerId }
    };

    return database.searchRecords(RECORD_TYPE, query, undefined, undefined, limit, offset) as Promise<Data[]>;
}
