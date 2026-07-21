
import type { RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function retrieve(postId: string): Promise<Record[]>
{
    const query: RecordQuery =
    {
        deleted: { EQUALS: false },
        postId: { EQUALS: postId }
    };

    return database.searchRecords(RECORD_TYPE, query) as Promise<Record[]>;
} 
