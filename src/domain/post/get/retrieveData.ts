
import database, { RecordQuery } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';
import PostNotFound from '../PostNotFound';

export type Data = {
    readonly id: string;
    readonly creatorId: string;
    readonly comicId: string;
    readonly createdAt: string;
    readonly ratingCount: number;
    readonly reactionCount: number;
};

export default async function retrieveData(id: string): Promise<Data>
{
    const query: RecordQuery = {
        id: { 'EQUALS': id },
        deleted: { 'EQUALS': false }
    };

    const fields = ['id', 'creatorId', 'comicId', 'createdAt', 'ratingCount', 'reactionCount'];

    const record = await database.findRecord(RECORD_TYPE, query, fields);

    if (record === undefined)
    {
        throw new PostNotFound();
    }

    return record as Data;
}
