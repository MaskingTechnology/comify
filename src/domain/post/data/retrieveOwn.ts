
import database, { RecordQuery } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions/constants';
import PostNotFound from '../errors/PostNotFound';
import type PostData from './PostData';
import createData from './mapRecord';

export default async function retrieveOwn(id: string, creatorId: string): Promise<PostData>
{
    const query: RecordQuery = {
        id: { 'EQUALS': id },
        creatorId: { 'EQUALS': creatorId },
        deleted: { 'EQUALS': false }
    };

    const record = await database.findRecord(RECORD_TYPE, query);

    if (record === undefined)
    {
        throw new PostNotFound();
    }

    return createData(record);
}
