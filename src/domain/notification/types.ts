
import { BaseDataModel } from '../types';

type DataModel = BaseDataModel &
{
    readonly createdAt: string;
    readonly type: string;
    readonly senderId: string;
    readonly receiverId: string;
    readonly postId?: string;
    readonly reactionId?: string;
};

export type { DataModel };
