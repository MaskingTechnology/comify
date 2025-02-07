
import database, { RecordQuery } from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import { DataModel } from '../types';

export default async function getData(creatorId: string, postId: string): Promise<DataModel | undefined>
{
    const query: RecordQuery =
    {
        creatorId: { EQUALS: creatorId },
        postId: { EQUALS: postId }
    };

    return database.findRecord(RECORD_TYPE, query) as Promise<DataModel | undefined>;
}
