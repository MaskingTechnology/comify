
import { BaseDataModel, CountOperation } from '../types';

type DataModel = BaseDataModel &
{
    readonly id: string;
    readonly creatorId: string;
    readonly comicId: string;
    readonly createdAt: string;
    readonly ratingCount: number;
    readonly reactionCount: number;
};

export type { CountOperation, DataModel };

