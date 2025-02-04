
import { BaseDataModel, CountOperation } from '../types';

type DataModel = BaseDataModel &
{
    readonly creatorId: string;
    readonly postCount: number;
    readonly followerCount: number;
    readonly followingCount: number;
    readonly popularity: number;
};

export type { CountOperation, DataModel };

