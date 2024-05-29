
import { CountOperation, DataEntity } from '../types';

type DataModel = DataEntity &
{
    readonly fullName: string;
    readonly nickname: string;
    readonly email: string;
    readonly portraitId?: string;
    readonly joinedAt: string;
    readonly postCount: number;
    readonly followerCount: number;
    readonly followingCount: number;
};

export type { CountOperation, DataModel };
