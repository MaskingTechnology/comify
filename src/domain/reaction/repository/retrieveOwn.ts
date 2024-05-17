
import database, { type RecordQuery } from '^/integrations/database/module';

import type ReactionData from '../data/ReactionData';
import { RECORD_TYPE } from '../definitions/constants';
import ReactionNotFound from '../errors/ReactionNotFound';
import createData from './mapToData';

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
