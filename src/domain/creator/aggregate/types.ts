
import type { DataModel as metricsData } from '^/domain/creator.metrics/types';
import type { ImageData } from '^/domain/image';

import type { DataModel } from '../types';

type AggregatedData = Omit<DataModel, 'email' | 'portraitId'> &
{
    readonly portrait?: ImageData;
    metrics: metricsData;
};

export type { AggregatedData };
