
import type { BaseDataModel } from '../types';

type DataModel = Omit<BaseDataModel, 'id'> &
{
    readonly id: string | undefined; // The id is undefined for unestablished relations.
    readonly followerId: string;
    readonly followingId: string;
};

export type { DataModel };
