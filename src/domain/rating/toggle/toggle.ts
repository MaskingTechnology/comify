
import type { Requester } from '^/domain/authentication';

import getData from './getData';
import switchOff from './switchOff';
import switchOn from './switchOn';

export default async function toggle(requester: Requester, postId: string): Promise<boolean>
{
    const data = await getData(requester.id, postId);

    return data === undefined
        ? switchOn(requester.id, postId)
        : switchOff(data);
}
