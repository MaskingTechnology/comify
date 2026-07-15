
import create from '../_create';
import erase from '../_erase';
import publish from './publish';

export default async function switchOn(tenantId: string, creatorId: string, postId: string): Promise<boolean>
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
