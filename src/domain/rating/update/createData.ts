
import { generateId } from '^/integrations/utilities/crypto';

export type Data = {
    readonly id: string;
    readonly creatorId: string;
    readonly postId: string | undefined;
    readonly reactionId: string | undefined;
    readonly createdAt: string;
};

export default function createData(creatorId: string, postId: string | undefined, reactionId: string | undefined): Data
{
    const id = generateId();
    const createdAt = new Date().toISOString();

    return { id, creatorId, postId, reactionId, createdAt };
}
