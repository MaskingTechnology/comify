
import type { AggregatedData as AggregatedPostData } from '~/post/aggregate';
import type { AggregatedData as AggregatedRelationData } from '~/relation/aggregate';

import type { BaseData } from '../definitions';

type AggregatedData = Pick<DataModel, 'id' | 'createdAt' | 'type'> &
{
    readonly relation: AggregatedRelationData;
    readonly post?: AggregatedPostData;
};

export type { AggregatedData };
