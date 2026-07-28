
import type { RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (followerId: string, limit: number | undefined = undefined, offset: number | undefined = undefined): Promise<Record[]>
{
    const query: RecordQuery<Record> =
    {
        followerId: { EQUALS: followerId }
    };

    return database.searchRecords<Record>(RECORD_TYPE, query, undefined, undefined, limit, offset);
}
