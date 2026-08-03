
import { Identifier } from '@comify/common/primitives/identifier';

import { logger } from '../../integrations';

import erase from './erase';

export default async function (id: Identifier): Promise<void>
{
    const succeeded = await erase(id);

    if (succeeded === false)
    {
        logger.warn(`Creator with id '${id}' has not been deleted.`);
    }
}
