
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (creatorIds: string[]): Promise<Record[]>
{
    const result = await database.searchRecords<Record>(RECORD_TYPE, {
        creatorId: { IN: creatorIds }
    });

    return result.records;
}
