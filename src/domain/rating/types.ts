
import type { BaseDataModel } from '../types';

type DataModel = BaseDataModel &
{
    readonly creatorId: string;
    readonly postId: string;
    readonly createdAt: string;
};

export type { DataModel };
