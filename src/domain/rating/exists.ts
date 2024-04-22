
import find from './data/find';

export default async function exists(creatorId: string, postId: string | undefined, reactionId: string | undefined): Promise<boolean>
{
    const data = await find(creatorId, postId, reactionId);

    return data !== undefined;
}
