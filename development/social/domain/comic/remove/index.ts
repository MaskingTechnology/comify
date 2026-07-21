
import logger from '@comify/common/integrations/logging';

import removeImage from '~/image/remove';

import retrieve from '../_retrieveById';

import erase from './erase';

export default async function run(id: string): Promise<void>
{
    const record = await retrieve(id);

    const succeeded = await erase(id);

    if (succeeded === false)
    {
        logger.warn(`Comic with id '${id}' has not been deleted.`);
    }

    return removeImage(record.imageId);
}
