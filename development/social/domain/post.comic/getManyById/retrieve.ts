
import database from '@comify/common/integrations/database';

import { type Record, RECORD_TYPE } from '../definitions';
import { logger } from '../integrations';

export default async function (ids: string[]): Promise<Record[]>
{
    const result = await database.searchRecords<Record>(RECORD_TYPE, {
        id: { IN: ids }
    });

    if (result.count !== ids.length)
    {
        logger.warn('Not all comics were retrieved');
    }

    return result.records;
}
