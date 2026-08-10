
import { type Requester } from '@comify/common/security';

import type { Creator } from '../definitions';
import getById from '../getById';

export default async function (requester: Requester): Promise<Creator>
{
    return getById(requester.tenantId, requester.principalId);
}
