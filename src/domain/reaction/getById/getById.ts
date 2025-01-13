
import database, { RecordQuery } from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import ReactionNotFound from '../ReactionNotFound';
import type { DataModel } from '../types';

export default async function getById(id: string): Promise<DataModel>
{
    const query: RecordQuery =
    {
        id: { 'EQUALS': id },
        deleted: { 'EQUALS': false }
    };

    const record = await database.findRecord(RECORD_TYPE, query);

    if (record === undefined)
    {
        throw new ReactionNotFound();
    }

    return record as DataModel;
}
