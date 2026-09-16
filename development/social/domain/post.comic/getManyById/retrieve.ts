
import database from '@comify/common/integrations/database';

import { type Record, RECORD_TYPE } from '../definitions';

export default async function (ids: string[]): Promise<Record[]>
{
    const result = await database.searchRecords<Record>(RECORD_TYPE, {
        id: { IN: ids }
    });

    return result.records;
}
