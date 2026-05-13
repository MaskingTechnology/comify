
import database from '^/integrations/database';
import logger from '^/integrations/logging';

import { RECORD_TYPE } from '../definitions';

export default async function erase(id: string): Promise<void>
{
    const result = await database.deleteRecord(RECORD_TYPE, { id: { EQUALS: id } } );

    if (result === 0)
    {
        logger.warn(`Image with id '${id}' has not been deleted.`);
    }
}
