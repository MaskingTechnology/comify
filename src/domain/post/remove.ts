
import Requester from '../authentication/Requester';
import decreasePostCount from '../creator/decreasePostCount';
import increasePostCount from '../creator/increasePostCount';
import retrieveOwn from './data/retrieveOwn';
import updateData from './data/update';

export default async function remove(requester: Requester, id: string): Promise<void>
{
    // We only delete the post itself and do not cascade it towards the reactions as it doesn't add
    // any value, and it would make the code more complex.

    const currentData = await retrieveOwn(id, requester.id);
    const updatedData = currentData.delete();

    let creatorCount;

    try
    {
        creatorCount = await decreasePostCount(currentData.creatorId);

        await updateData(updatedData);
    }
    catch (error: unknown)
    {
        if (creatorCount !== undefined)
        {
            await increasePostCount(currentData.creatorId);
        }

        throw error;
    }
}
