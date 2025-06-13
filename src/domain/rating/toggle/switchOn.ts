
import create from '../create';
import erase from '../erase';
import publish from './publish';

export default async function switchOn(creatorId: string, postId: string): Promise<boolean>
{
    const id = await create(creatorId, postId);

    try
    {
        await publish(creatorId, postId, true);

        return true;
    }
    catch (error)
    {
        await erase(id);

        throw error;
    }
}
