
import type { BaseData } from '../definitions';

export type Data = BaseData & {
    readonly origins: string[];
};

export type Tenant = {
    readonly id: string;
    readonly origin: string;
};

export const tenant: Tenant = {
    id: 'default',
    origin: 'localhost'
};

export const RECORD_TYPE = 'tenant';