
import { BaseDataModel, CountOperation } from '../types';

type DataModel = BaseDataModel &
{
    readonly creatorId: string;
    readonly posts: number;
    readonly followers: number;
    readonly following: number;
    readonly popularity: number;
};

export type { CountOperation, DataModel };
