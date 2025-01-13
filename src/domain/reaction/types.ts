
import type { BaseDataModel, CountOperation } from '../types';

type DataModel = BaseDataModel &
{
    readonly createdAt: string;
    readonly creatorId: string;
    readonly postId: string | undefined;
    readonly reactionId: string | undefined;
    readonly comicId: string | undefined;
    readonly commentId: string | undefined;
    readonly ratingCount: number;
    readonly reactionCount: number;
};

export type { CountOperation, DataModel };
