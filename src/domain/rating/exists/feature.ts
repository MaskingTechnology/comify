
import hasData from './hasData';

export default async function feature(creatorId: string, postId: string | undefined, reactionId: string | undefined): Promise<boolean>
{
    return hasData(creatorId, postId, reactionId);
}
