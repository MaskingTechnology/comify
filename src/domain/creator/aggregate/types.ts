
import type { ImageData } from '^/domain/image';

import type { DataModel } from '../types';

type AggregatedData = Omit<DataModel, 'email' | 'portraitId'> &
{
    readonly portrait?: ImageData;
    postCount: number;
    followerCount: number;
    followingCount: number;
};

export type { AggregatedData };
