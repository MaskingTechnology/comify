
import database from '^/integrations/database';
import logger from '^/integrations/logging';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

type Data = Partial<Omit<DataModel, 'id'>>;

export default async function update(id: string, data: Data): Promise<void>
{
    const result = await database.updateRecord(RECORD_TYPE, { id: { EQUALS: id } }, data);

    if (result === 0)
    {
        logger.warn(`Post metrics with id '${id}' has not been updated.`);
    }
}
