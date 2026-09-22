
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';
import { logger } from '../integrations';

export default async function (id: string, reactions: number): Promise<void>
{
    const result = await database.updateRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } }, { reactions });

    if (result.noChanges)
    {
        logger.warn(`Reaction count for post metrics with id '${id}' has not been updated.`);
    }
}
