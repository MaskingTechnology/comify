
import { type Validation } from '@theshelf/validation';

import { type BaseRecord } from '../definitions';

export type Record = BaseRecord & {
    readonly origins: string[];
};

export type TenantId = string;
export type Origin = string;

export type Tenant = {
    readonly id: TenantId;
    readonly origin: Origin;
};

export const tenantIdValidation: Validation = {
    message: 'Invalid origin',
    STRING: {}
};

export const originValidation: Validation = {
    message: 'Invalid origin',
    URL: {}
};

export const tenant: Tenant = {
    id: 'default',
    origin: 'localhost'
};

export const RECORD_TYPE = 'tenant';
