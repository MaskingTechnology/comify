
import type { AggregatedData as ComicData } from '^/domain/comic/aggregate/types';
import type { DataModel as CommentData } from '^/domain/comment/types';
import type CreatorData from '^/domain/relation/view/RelationView';

import type { DataModel } from '../types';

type AggregatedData = Pick<DataModel, 'id' | 'createdAt' | 'ratingCount'> &
{
    readonly creator: CreatorData;
    readonly hasRated: boolean;
    readonly comic?: ComicData;
    readonly comment?: CommentData;
};

export type { AggregatedData };
