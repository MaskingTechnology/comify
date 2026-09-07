
import { type Requester } from '@comify/common/security';

import { type FullName } from '../definitions';
import { logger } from '../integrations';

import persist from './persist';
import publish from './publish';
import validate from './validate';

export default async function (requester: Requester, fullName: FullName): Promise<void>
{
    validate(fullName);

    const succeeded = await persist(requester.principalId, fullName);

    if (succeeded === false)
    {
        logger.warn(`Full name for creator with id '${requester.principalId}' has not been updated.`);
    }

    return publish(requester.tenantId, requester.principalId);
}
