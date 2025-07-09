
import type { BaseDataModel, CountOperation } from '../types';

type DataModel = BaseDataModel &
{
    readonly creatorId: string;
    readonly comicId?: string;
    readonly commentId?: string;
    readonly parentId?: string;
    readonly createdAt: string;
};

export type { CountOperation, DataModel };
