
import type { ImageData } from '~/image';

import type { DataModel } from '../types';

type AggregatedData = Omit<DataModel, 'imageId'> &
{
    readonly image: ImageData;
};

export type { AggregatedData };
