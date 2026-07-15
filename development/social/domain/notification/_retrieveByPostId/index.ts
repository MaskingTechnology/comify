
import type { RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Data } from '../definitions';

export default async function run(postId: string): Promise<Data[]>
{
    const query: RecordQuery =
    {
        deleted: { EQUALS: false },
        postId: { EQUALS: postId }
    };

    return database.searchRecords(RECORD_TYPE, query) as Promise<Data[]>;
} 
