
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';
import { logger } from '../integrations';

import ImageNotFound from './ImageNotFound';

export default async function (id: string): Promise<Record>
{
    const result = await database.readRecord<Record>(RECORD_TYPE, {
        id: { EQUALS: id }
    });

    if (result.notFound)
    {
        logger.warn(`Image with id '${id}' could not be found.`);

        throw new ImageNotFound();
    }

    return result.record!;
}
