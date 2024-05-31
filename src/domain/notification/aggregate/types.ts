
import type { AggregatedData as PostData } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionData } from '^/domain/reaction/aggregate/types';
import type { AggregatedData as RelationData } from '^/domain/relation/aggregate/types';

import { DataModel } from '../types';

type AggregatedData = Pick<DataModel, 'id' | 'createdAt' | 'type'> &
{
    readonly relation: RelationData;
    readonly post?: PostData;
    readonly reaction?: ReactionData;
};

export type { AggregatedData };
