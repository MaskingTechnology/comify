
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';
import { logger } from '../integrations';

export default async function (tenantId: string, ids: string[]): Promise<Record[]>
{
    const result = await database.searchRecords<Record>(RECORD_TYPE, {
        tenantId: { EQUALS: tenantId },
        id: { IN: ids },
        deleted: { EQUALS: false }
    });

    if (result.count !== ids.length)
    {
        logger.warn('Not all posts were retrieved');
    }

    return result.records;
}
