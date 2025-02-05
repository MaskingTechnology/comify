
import { BaseDataModel, CountOperation } from '../types';

type DataModel = BaseDataModel &
{
    readonly postId: string;
    readonly ratings: number;
    readonly reactions: number;
    readonly popularity: number;
};

export type { CountOperation, DataModel };

