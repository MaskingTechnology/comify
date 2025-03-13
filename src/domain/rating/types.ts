
import type { BaseDataModel } from '../types';

type DataModel = BaseDataModel &
{
    readonly id: string;
    readonly creatorId: string;
    readonly postId: string;
    readonly createdAt: string;
};

export type { DataModel };
