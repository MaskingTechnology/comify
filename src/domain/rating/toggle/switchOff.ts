
import create from '../create';
import erase from '../erase';
import type { DataModel } from '../types';
import publish from './publish';

export default async function switchOff(tenantId: string, rating: DataModel): Promise<boolean>
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
