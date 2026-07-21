
import logger from '@comify/common/integrations/logging';

import type { Record } from '../definitions';

import retrieve from './retrieve';
import ComicNotFound from './ComicNotFound';

export default async function run(id: string): Promise<Record>
{
    const record = await retrieve(id);

    if (record === undefined)
    {
        logger.warn(`Comic with id '${id}' could not be found.`);

        throw new ComicNotFound();
    }

    return record;
}

export { ComicNotFound };
