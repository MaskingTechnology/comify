
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';
import { logger } from '../integrations';

export default async function (ids: string[]): Promise<Record[]>
{
    const result = await database.searchRecords<Record>(RECORD_TYPE, {
        id: { IN: ids }
    });

    if (ids.length !== result.count)
    {
        logger.warn('Not all image records were retrieved');
    }

    return result.records;
}
