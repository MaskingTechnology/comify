
import database, { RecordQuery } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';
import PostNotFound from '../PostNotFound';

export default async function retrieveCount(id: string): Promise<number>
{
    const query: RecordQuery = {
        id: { 'EQUALS': id },
        deleted: { 'EQUALS': false }
    };

    const fields = ['ratingCount'];

    const record = await database.findRecord(RECORD_TYPE, query, fields);

    if (record === undefined)
    {
        throw new PostNotFound();
    }

    return record.ratingCount as number;
}
