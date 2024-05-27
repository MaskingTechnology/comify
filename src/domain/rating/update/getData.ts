
import database, { RecordQuery } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';

export type Data = {
    readonly id: string;
};

export default async function getData(creatorId: string, postId: string | undefined, reactionId: string | undefined): Promise<Data | undefined>
{
    const fields = ['id'];

    const query: RecordQuery = {
        creatorId: { EQUALS: creatorId },
        postId: { EQUALS: postId },
        reactionId: { EQUALS: reactionId }
    };

    return database.findRecord(RECORD_TYPE, query, fields) as Promise<Data | undefined>;
}
