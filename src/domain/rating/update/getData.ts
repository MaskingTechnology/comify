
import database, { RecordQuery } from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';

type Data = {
    readonly id: string;
};

export default async function getData(creatorId: string, postId: string | undefined = undefined, reactionId: string | undefined = undefined): Promise<Data | undefined>
{
    const query: RecordQuery =
    {
        creatorId: { EQUALS: creatorId },
        postId: { EQUALS: postId },
        reactionId: { EQUALS: reactionId }
    };

    return database.findRecord(RECORD_TYPE, query, ['id']) as Promise<Data | undefined>;
}
