
import { type Requester } from '@comify/common/security';

import { logger } from '../integrations';

import validate from './validate';
import persist from './persist';
import publish from './publish';

export default async function (requester: Requester, fullName: string): Promise<void>
{
    validate(fullName);

    const succeeded = await persist(requester.principalId, fullName);

    if (succeeded === false)
    {
        logger.warn(`Full name for creator with id '${requester.principalId}' has not been updated.`);
    }

    return publish(requester.tenantId, requester.principalId);
}

export { default as InvalidFullName } from './InvalidFullName';
