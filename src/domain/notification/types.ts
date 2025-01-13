
import type { BaseDataModel } from '../types';

type DataModel = BaseDataModel &
{
    readonly createdAt: string;
    readonly type: string;
    readonly senderId: string;
    readonly receiverId: string;
    readonly targetPostId?: string;
    readonly targetReactionId?: string;
    readonly sourceReactionId?: string;
};

export type { DataModel };
