
import logger from '@comify/common/integrations/logging';

import { type Requester } from '@comify/common/security';

import persist from './persist';

import validate from './validate';

export default async function run(requester: Requester, fullName: string): Promise<void>
{
    validate(fullName);

    const succeeded = await persist(requester.principalId, fullName);

    if (succeeded === false)
    {
        logger.warn(`Full name for creator with id '${requester.principalId}' has not been updated.`);
    }
}

export { default as InvalidFullName } from './InvalidFullName';
