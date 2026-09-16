
import { type RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (followingId: string, limit: number, offset: number): Promise<Record[]>
{
    const query: RecordQuery<Record> =
    {
        followingId: { EQUALS: followingId }
    };

    const result = await database.searchRecords<Record>(RECORD_TYPE, query, undefined, undefined, limit, offset);

    return result.records;
}
