
import type { BaseDataModel } from '../types';

type DataModel = BaseDataModel & {
    readonly tenantId: string;
    readonly origin: string;
};

export type { DataModel };
