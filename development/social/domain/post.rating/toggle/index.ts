
import { type Requester } from '@comify/common/security';

import retrieve from './retrieve';
import switchOff from './switchOff';
import switchOn from './switchOn';

export default async function (requester: Requester, postId: string): Promise<boolean>
{
    const record = await retrieve(requester.principalId, postId);

    return record === undefined
        ? switchOn(requester.tenantId, requester.principalId, postId)
        : switchOff(requester.tenantId, record);
}

export { default as InvalidRating } from './InvalidRating';
