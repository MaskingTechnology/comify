
import type { BaseDataModel } from '../types';

type DataModel = BaseDataModel & {
    readonly name: string;
};

export type { DataModel };
