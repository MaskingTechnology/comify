
import { Requester } from '^/domain/authentication';

import create from '../create';
import erase from '../erase';

import getData from './getData';
import publish from './publish';

export default async function toggle(requester: Requester, postId: string): Promise<boolean>
{
    const data = await getData(requester.id, postId);

    if (data !== undefined)
    {
        await erase(data.id);

        await publish(requester.id, postId, false);

        return false;
    }

    await create(requester.id, postId);

    await publish(requester.id, postId, true);

    return true;
}
