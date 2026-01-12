
import database from '^/integrations/database';
import logger from '^/integrations/logging';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

import ImageNotFound from './ImageNotFound';

export default async function retrieveData(id: string): Promise<DataModel>
{
    const record = await database.readRecord(RECORD_TYPE, { id: { EQUALS: id } });

    if (record === undefined)
    {
        logger.logWarn(`Image with id '${id}' could not be found.`);

        throw new ImageNotFound();
    }
    
    return record as DataModel;
}
