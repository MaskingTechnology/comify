
import type { AggregatedData as AggregatedComicData } from '^/domain/comic/aggregate';
import type { DataModel as CommentData } from '^/domain/comment/types';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import type { DataModel } from '../types';

type AggregatedData = Pick<DataModel, 'id' | 'createdAt' | 'ratingCount' | 'postId'> &
{
    readonly creator: AggregatedRelationData;
    readonly hasRated: boolean;
    readonly comic?: AggregatedComicData;
    readonly comment?: CommentData;
};

export type { AggregatedData };
