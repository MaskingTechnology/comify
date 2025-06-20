
import type { RecordData } from '^/integrations/database';

import type { DataModel as OriginDataModel } from '^/domain/origin';
import type { DataModel as TenantDataModel } from '^/domain/tenant';

import { VALUES } from './values.fixtures';

export const TENANTS: TenantDataModel[] = [
    { id: VALUES.IDS.TENANT1, name: VALUES.NAMES.TENANT1 }
];

export const ORIGINS: OriginDataModel[] = [
    { id: VALUES.IDS.ORIGIN1, origin: VALUES.NAMES.ORIGIN1, tenantId: VALUES.IDS.TENANT1 },
    { id: VALUES.IDS.ORIGIN2, origin: VALUES.NAMES.ORIGIN2, tenantId: VALUES.IDS.TENANT1 }
];

export const RECORDS: Record<string, RecordData[]> = { TENANTS, ORIGINS };
