
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { DataModel } from '../types';

type AggregatedData = Pick<DataModel, 'id' | 'createdAt' | 'type'> &
{
    readonly relation: AggregatedRelationData;
    readonly post?: AggregatedPostData;
    readonly reaction?: AggregatedReactionData;
};

export type { AggregatedData };
