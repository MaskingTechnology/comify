
import database from '@comify/common/integrations/database';
import logger from '@comify/common/integrations/logging';

import { RECORD_TYPE } from '../definitions';
import type { Record } from '../definitions';

import ComicNotFound from './ComicNotFound';

export default async function run(id: string): Promise<Record>
{
    const record = await database.readRecord(RECORD_TYPE, { id: { EQUALS: id } });

    if (record === undefined)
    {
        logger.warn(`Comic with id '${id}' could not be found.`);

        throw new ComicNotFound();
    }

    return record as Record;
}

export { ComicNotFound };
