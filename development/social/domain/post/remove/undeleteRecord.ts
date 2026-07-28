
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';
import { logger } from '../integrations';

export default async function (id: string): Promise<void>
{
    const result = await database.updateRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } }, { deleted: false });

    if (result === 0)
    {
        logger.warn(`Post with id '${id}' has not been undeleted.`);
    }
}
