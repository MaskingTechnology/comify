
import database from '@comify/common/integrations/database';
import logger from '@comify/common/integrations/logging';

import { RECORD_TYPE } from '../definitions';

export default async function persist(id: string, nickname: string): Promise<void>
{
    const result = await database.updateRecord(RECORD_TYPE, { id: { EQUALS: id } }, { nickname });

    if (result === 0)
    {
        logger.warn(`Nickname for creator with id '${id}' has not been updated.`);
    }
}
