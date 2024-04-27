
import Requester from '../authentication/Requester';
import retrieve from './data/retrieve';
import updateData from './data/update';

export default async function remove(requester: Requester, reactionId: string): Promise<void>
{
    const currentData = await retrieve(reactionId);

    const updatedPost = currentData.delete();

    await updateData(updatedPost);
}
