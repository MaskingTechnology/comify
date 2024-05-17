
import database, { type RecordQuery } from '^/integrations/database/module';

import type PostData from '../data/PostData';
import { RECORD_TYPE } from '../definitions/constants';
import PostNotFound from '../errors/PostNotFound';
import mapToData from './mapToData';

export default async function retrieve(id: string): Promise<PostData>
{
    const query: RecordQuery = {
        id: { 'EQUALS': id },
        deleted: { 'EQUALS': false }
    };

    const record = await database.findRecord(RECORD_TYPE, query);

    if (record === undefined)
    {
        throw new PostNotFound();
    }

    return mapToData(record);
}
