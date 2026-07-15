
import type { RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Data } from '../definitions';

export default async function getData(creatorId: string, postId: string): Promise<Data | undefined>
{
    const query: RecordQuery =
    {
        creatorId: { EQUALS: creatorId },
        postId: { EQUALS: postId }
    };

    return database.readRecord(RECORD_TYPE, query) as Promise<Data | undefined>;
}
