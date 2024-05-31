
import type { AggregatedData as CreatorData } from '^/domain/creator/aggregate/types';

import type { DataModel } from '../types';

type AggregatedData = Pick<DataModel, 'id'> &
{
    readonly following: CreatorData;
    readonly established: boolean;
    readonly self: boolean;
};

export type { AggregatedData };
