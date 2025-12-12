
import type { DataModel as metricsData } from '~/creator.metrics/types';
import type { ImageData } from '~/image';

import type { DataModel } from '../types';

type AggregatedData = Omit<DataModel, 'tenantId' | 'email' | 'portraitId'> &
{
    readonly portrait?: ImageData;
    readonly metrics: metricsData;
};

export type { AggregatedData };
