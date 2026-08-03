
import type { Identifier } from '@comify/common/primitives/identifier';

import type { Record } from '../definitions';
import { logger } from '../integrations';

import retrieve from './retrieve';
import ComicNotFound from './ComicNotFound';

export default async function (id: Identifier): Promise<Record>
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
