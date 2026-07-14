
import type { BaseData } from '../definitions';

type Data = BaseData &
{
    readonly createdAt: string;
    readonly type: string;
    readonly senderId: string;
    readonly receiverId: string;
    readonly postId?: string;
};

export type { DataModel };
