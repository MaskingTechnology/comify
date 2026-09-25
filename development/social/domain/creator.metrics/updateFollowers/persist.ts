
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';
import { logger } from '../integrations';

export default async function (id: string, followers: number): Promise<void>
{
    const result = await database.updateRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } }, { followers });

    if (result.noChanges)
    {
        logger.warn(`Followers count for creator metrics with id '${id}' has not been updated.`);
    }
}
