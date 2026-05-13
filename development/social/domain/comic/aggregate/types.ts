
import type { ImageData } from '^/domain/image';

import type { DataModel } from '../types';

type AggregatedData = Omit<DataModel, 'imageId'> &
{
    readonly image: ImageData;
};

export type { AggregatedData };
