
import type { RecordData } from '^/integrations/database';

import type { DataModel as TenantDataModel } from '^/domain/tenant';

import { VALUES } from './values.fixtures';

export const TENANTS: TenantDataModel[] = [
    { id: VALUES.IDS.TENANT1, origins: [VALUES.ORIGINS.FIRST, VALUES.ORIGINS.SECOND] }
];

export const RECORDS: Record<string, RecordData[]> = { TENANTS };
