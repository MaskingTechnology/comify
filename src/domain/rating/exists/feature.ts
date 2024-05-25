
import findData from './findData';

export default async function feature(creatorId: string, postId: string | undefined, reactionId: string | undefined): Promise<boolean>
{
    const data = await findData(creatorId, postId, reactionId);

    return data !== undefined;
}
