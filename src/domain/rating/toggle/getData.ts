
import type { RecordQuery } from '@theshelf/database';
import database from '@theshelf/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function getData(creatorId: string, postId: string): Promise<DataModel | undefined>
{
    const query: RecordQuery =
    {
        creatorId: { EQUALS: creatorId },
        postId: { EQUALS: postId }
    };

    return database.findRecord(RECORD_TYPE, query) as Promise<DataModel | undefined>;
}
