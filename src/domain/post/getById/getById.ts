
import type { RecordQuery } from '@theshelf/database';
import database from '@theshelf/database';

import { RECORD_TYPE } from '../definitions';
import PostNotFound from '../PostNotFound';
import type { DataModel } from '../types';

export default async function getById(tenantId: string, id: string): Promise<DataModel>
{
    const query: RecordQuery =
    {
        tenantId: { EQUALS: tenantId },
        id: { EQUALS: id },
        deleted: { EQUALS: false }
    };

    const record = await database.findRecord(RECORD_TYPE, query);

    if (record === undefined)
    {
        throw new PostNotFound();
    }

    return record as DataModel;
}
