
import type { ImageData } from '^/domain/image';

import type { DataModel } from '../types';

type AggregatedData = Omit<DataModel, 'email' | 'portraitId' | 'popularity'> &
{
    readonly portrait?: ImageData;
};

export type { AggregatedData };
