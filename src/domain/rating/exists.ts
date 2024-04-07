
import find from './data/find';

export default async function exists(creatorId: string, postId: string | undefined, reactionId: string | undefined): Promise<boolean>
{
    const rating = await find(creatorId, postId, reactionId);

    return rating !== undefined;
}
