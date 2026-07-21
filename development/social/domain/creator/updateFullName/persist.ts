
import database from '@comify/common/integrations/database';
import logger from '@comify/common/integrations/logging';

import { RECORD_TYPE } from '../definitions';

export default async function run(id: string, fullName: string): Promise<void>
{
    const result = await database.updateRecord(RECORD_TYPE, { id: { EQUALS: id } }, { fullName });

    if (result === 0)
    {
        logger.warn(`Full name for creator with id '${id}' has not been updated.`);
    }
}
