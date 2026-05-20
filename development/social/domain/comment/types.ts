
import type { BaseDataModel } from '../types';

type DataModel = BaseDataModel &
{
    readonly message: string;
};

export type { DataModel };
