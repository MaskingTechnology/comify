
import type { DataModel as metricsData } from '^/domain/creator.metrics/types';
import type { ImageData } from '^/domain/image';

import type { DataModel } from '../types';

type AggregatedData = Omit<DataModel, 'email' | 'tenantId' | 'portraitId'> &
{
    readonly portrait?: ImageData;
    readonly metrics: metricsData;
};

export type { AggregatedData };
