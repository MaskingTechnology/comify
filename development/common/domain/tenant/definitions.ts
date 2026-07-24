
import type { BaseRecord } from '../definitions';

export type Record = BaseRecord & {
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