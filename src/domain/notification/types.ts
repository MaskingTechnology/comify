
import type { BaseDataModel } from '../types';

type DataModel = BaseDataModel &
{
    readonly createdAt: string;
    readonly type: string;
    readonly senderId: string;
    readonly receiverId: string;
    readonly postId?: string;
    // readonly sourcePostId?: string;
};

export type { DataModel };
