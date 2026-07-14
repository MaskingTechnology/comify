
import type { AggregatedData as AggregatedCreatorData } from '~/creator/_toModel';

import type { BaseData } from '../definitions';

type AggregatedData = Pick<DataModel, 'id'> &
{
    readonly following: AggregatedCreatorData;
    readonly established: boolean;
    readonly self: boolean;
};

export type { AggregatedData };
