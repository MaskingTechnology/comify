
import database from '@theshelf/database';
import logger from '@theshelf/logging';

import { RECORD_TYPE } from '../definitions';

export default async function deleteData(id: string): Promise<void>
{
    const result = await database.updateRecord(RECORD_TYPE, { id: { EQUALS: id } }, { deleted: true });

    if (result === 0)
    {
        logger.logWarn(`Post with id '${id}' has not been deleted.`);
    }
}
