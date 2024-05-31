
import { BaseDataModel } from '../types';

type DataModel = BaseDataModel &
{
    readonly id: string;
    readonly creatorId: string;
    readonly postId: string | undefined;
    readonly reactionId: string | undefined;
    readonly createdAt: string;
};

export type { DataModel };
