
import type { Identifier } from '@comify/common/primitives/identifier';

import removeImage from '~/image/remove';

import { logger } from '../integrations';
import retrieve from '../_retrieveById';

import erase from './erase';

export default async function (id: Identifier): Promise<void>
{
    const record = await retrieve(id);

    const succeeded = await erase(id);

    if (succeeded === false)
    {
        logger.warn(`Comic with id '${id}' has not been deleted.`);
    }

    return removeImage(record.imageId);
}
