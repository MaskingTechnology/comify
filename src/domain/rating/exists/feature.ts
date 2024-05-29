
import database, { RecordQuery } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';

export default async function feature(creatorId: string, postId: string | undefined, reactionId: string | undefined): Promise<boolean>
{
    const fields = ['id'];

    const query: RecordQuery = {
        creatorId: { EQUALS: creatorId },
        postId: { EQUALS: postId },
        reactionId: { EQUALS: reactionId }
    };

    const data = await database.findRecord(RECORD_TYPE, query, fields);

    return data !== undefined;
}
