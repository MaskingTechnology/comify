
import create from '../_create';
import erase from '../_erase';
import type { Data } from '../definitions';

import publish from './publish';

export default async function switchOff(tenantId: string, rating: Data): Promise<boolean>
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
