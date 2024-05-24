
import { generateId } from '^/integrations/utilities/crypto';

export type Data = {
    readonly id: string;
    readonly creatorId: string;
    readonly comicId: string;
    readonly createdAt: string;
    readonly ratingCount: number;
    readonly reactionCount: number;
};

export default function createData(creatorId: string, comicId: string,): Data
{
    return {
        id: generateId(),
        creatorId,
        comicId,
        createdAt: new Date().toISOString(),
        ratingCount: 0,
        reactionCount: 0
    };
}
