
import type { AggregatedData as AggregatedCreatorData } from '~/creator/aggregate';

import type { DataModel } from '../types';

type AggregatedData = Pick<DataModel, 'id'> &
{
    readonly following: AggregatedCreatorData;
    readonly established: boolean;
    readonly self: boolean;
};

export type { AggregatedData };
