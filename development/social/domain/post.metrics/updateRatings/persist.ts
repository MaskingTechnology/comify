
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';
import { logger } from '../integrations';

export default async function (id: string, ratings: number): Promise<void>
{
    const result = await database.updateRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } }, { ratings });

    if (result.noChanges)
    {
        logger.warn(`Rating count for post metrics with id '${id}' has not been updated.`);
    }
}
