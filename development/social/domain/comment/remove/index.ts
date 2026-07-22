
import logger from '@comify/common/integrations/logging';

import erase from './erase';

export default async function run(id: string): Promise<void>
{
    const succeeded = await erase(id);

    if (succeeded === false)
    {
        logger.warn(`Comment with id '${id}' has not been deleted.`);
    }
}
