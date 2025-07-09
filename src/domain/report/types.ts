
import type { BaseDataModel } from '../types';

type DataModel = BaseDataModel &
{
    readonly postId: string;
    readonly reason: Reason;
    readonly reviewed: boolean;
    readonly remark?: string;
};

export type { DataModel };
export type Reason = 'scam, fraude or spam' | 'inappropriate content';
