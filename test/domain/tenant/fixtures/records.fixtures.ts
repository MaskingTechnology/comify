
import type { RecordData } from '^/integrations/database';

import type { DataModel as TenantDataModel } from '^/domain/tenant';

import { VALUES } from './values.fixtures';

export const TENANTS: TenantDataModel[] = [
    { id: VALUES.IDS.TENANT1, name: VALUES.NAMES.TENANT1, origins: [] }
];

export const RECORDS: Record<string, RecordData[]> = { TENANTS };
