
import database from '^/integrations/database';
import logger from '^/integrations/logging';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

import ComicNotFound from './ComicNotFound';

export default async function getById(id: string): Promise<DataModel>
{
    const record = await database.readRecord(RECORD_TYPE, { id: { EQUALS: id } });

    if (record === undefined)
    {
        logger.warn(`Comic with id '${id}' could not be found.`);

        throw new ComicNotFound();
    }

    return record as DataModel;
}
