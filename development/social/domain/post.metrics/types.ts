
import type { BaseDataModel, CountOperation } from '../definitions';

type Data = BaseData &
{
    readonly postId: string;
    readonly ratings: number;
    readonly reactions: number;
    readonly popularity: number;
};

export type { CountOperation, DataModel };

