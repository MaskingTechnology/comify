
import type { BaseDataModel } from '../types';

type DataModel = BaseDataModel &
{
    readonly imageId: string;
    readonly structure?: string;
};

export type { DataModel };
