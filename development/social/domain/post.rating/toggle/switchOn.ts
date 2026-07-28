
import create from './create';
import erase from './erase';
import publish from './publishAdded';

export default async function (tenantId: string, creatorId: string, postId: string): Promise<boolean>
{
    const id = await create(creatorId, postId);

    try
    {
        await publish(tenantId, creatorId, postId, true);

        return true;
    }
    catch (error)
    {
        await erase(id);

        throw error;
    }
}
