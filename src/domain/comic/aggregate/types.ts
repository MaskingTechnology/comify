
import type { ImageData } from '^/domain/image/getById/types';

import type { DataModel } from '../types';

type AggregatedData = Omit<DataModel, 'imageId'> &
{
    readonly image: ImageData;
};

export type { AggregatedData };
