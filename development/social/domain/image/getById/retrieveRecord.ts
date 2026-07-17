
import database from '@comify/common/integrations/database';
import logger from '@comify/common/integrations/logging';

import { RECORD_TYPE, type Record } from '../definitions';

import ImageNotFound from './ImageNotFound';

export default async function retrieveRecord(id: string): Promise<Record>
{
    const record = await database.readRecord(RECORD_TYPE, { id: { EQUALS: id } });

    if (record === undefined)
    {
        logger.warn(`Image with id '${id}' could not be found.`);

        throw new ImageNotFound();
    }

    return record as Record;
}
