
import { type Requester } from '@comify/common/security';

import { type FullName } from '../definitions';

import persist from './persist';
import publish from './publish';
import validate from './validate';

export default async function (requester: Requester, fullName: FullName): Promise<void>
{
    validate(fullName);

    await persist(requester.principalId, fullName);

    return publish(requester.tenantId, requester.principalId);
}
