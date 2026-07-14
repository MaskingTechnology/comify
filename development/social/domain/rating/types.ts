
import type { BaseData } from '../definitions';

type Data = BaseData &
{
    readonly id: string;
    readonly creatorId: string;
    readonly postId: string;
    readonly createdAt: string;
};

export type { DataModel };
