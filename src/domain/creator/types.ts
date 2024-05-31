
import { BaseDataModel, CountOperation } from '../types';

type DataModel = BaseDataModel &
{
    readonly fullName: string;
    readonly nickname: string;
    readonly email: string;
    readonly portraitId?: string;
    readonly joinedAt: string;
    readonly postCount: number;
    readonly followerCount: number;
    readonly followingCount: number;
    readonly popularity: number;
};

export type { CountOperation, DataModel };
