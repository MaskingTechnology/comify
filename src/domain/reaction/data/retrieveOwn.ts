
import database, { RecordQuery } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions/constants';
import ReactionNotFound from '../errors/ReactionNotFound';
import type ReactionData from './ReactionData';
import createData from './mapRecord';

export default async function retrieveOwn(id: string, creatorId: string): Promise<ReactionData>
{
    const query: RecordQuery = {
        id: { 'EQUALS': id },
        creatorId: { 'EQUALS': creatorId },
        deleted: { 'EQUALS': false }
    };

    const record = await database.findRecord(RECORD_TYPE, query);

    if (record === undefined)
    {
        throw new ReactionNotFound();
    }

    return createData(record);
}
