
import { BaseDataModel, CountOperation } from '../types';

type DataModel = BaseDataModel &
{
    readonly postId: string;
    readonly ratingCount: number;
    readonly reactionCount: number;
    readonly popularity: number;
};

export type { CountOperation, DataModel };

