
import type { AggregatedData as PostData } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionData } from '^/domain/reaction/aggregate/types';
import type { AggregatedData as RelationData } from '^/domain/relation/aggregate/types';

import { DataModel } from '../types';

type AggregatedData = Pick<DataModel, 'id' | 'createdAt' | 'type'> &
{
    readonly relation: RelationData;
    readonly targetPost?: PostData;
    readonly targetReaction?: ReactionData;
    readonly sourceReaction?: ReactionData;
};

export type { AggregatedData };
