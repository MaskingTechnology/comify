
import database, { RecordQuery } from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';

type Data = {
    readonly id: string;
};

export default async function getData(creatorId: string, postId: string): Promise<Data | undefined>
{
    const query: RecordQuery =
    {
        creatorId: { EQUALS: creatorId },
        postId: { EQUALS: postId }
    };

    return database.findRecord(RECORD_TYPE, query, ['id']) as Promise<Data | undefined>;
}
