
import type { BaseDataModel } from '../types';

type DataModel = BaseDataModel & {
    readonly origins: string[];
};

type Tenant = {
    readonly id: string;
    readonly origin: string;
};

export type { DataModel, Tenant };
