
import type { RecordQuery } from '^/integrations/database';
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function getByPostId(postId: string): Promise<DataModel[]>
{
    const query: RecordQuery =
    {
        deleted: { EQUALS: false },
        postId: { EQUALS: postId }
    };

    return database.searchRecords(RECORD_TYPE, query) as Promise<DataModel[]>;
} 
