
import type { BaseDataModel, CountOperation } from '../types';

type DataModel = BaseDataModel &
{
    readonly createdAt: string;
    readonly creatorId: string;
    readonly postId: string;
    readonly comicId: string | undefined;
    readonly commentId: string | undefined;
    readonly ratingCount: number;
};

export type { CountOperation, DataModel };
