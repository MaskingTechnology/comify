
import database from '@comify/common/integrations/database';
import { type Identifier } from '@comify/common/primitives/identifier';

import { type Record, RECORD_TYPE } from '../definitions';
import { logger } from '../integrations';

import ComicNotFound from './ComicNotFound';

export default async function (id: Identifier): Promise<Record>
{
    const result = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } });

    if (result.notFound)
    {
        logger.warn(`Comic with id '${id}' could not be found.`);

        throw new ComicNotFound();
    }

    return result.record!;
}
