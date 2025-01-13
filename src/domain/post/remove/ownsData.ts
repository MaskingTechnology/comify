
import database, { RecordQuery } from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';

export default async function ownsData(id: string, creatorId: string): Promise<boolean>
{
    const query: RecordQuery =
    {
        id: { 'EQUALS': id },
        creatorId: { 'EQUALS': creatorId },
        deleted: { 'EQUALS': false }
    };

    const record = await database.findRecord(RECORD_TYPE, query, ['id']);

    return record !== undefined;
}
