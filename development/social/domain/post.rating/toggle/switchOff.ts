
import type { Record } from '../definitions';

import create from './create';
import erase from './erase';
import publish from './publishRemoved';

export default async function switchOff(tenantId: string, rating: Record): Promise<boolean>
{
    await erase(rating.id);

    try
    {
        await publish(tenantId, rating.creatorId, rating.postId, false);

        return false;
    }
    catch (error)
    {
        await create(rating.creatorId, rating.postId);

        throw error;
    }
}
