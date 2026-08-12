
import { type RecordData } from '@theshelf/database';

import { type Record as TenantRecord } from '@comify/common/domain/tenant';

import { VALUES } from './values.fixtures';

export const TENANTS: TenantRecord[] = [
    { id: VALUES.IDS.TENANT1, origins: [VALUES.ORIGINS.FIRST, VALUES.ORIGINS.SECOND] }
];

export const RECORDS: Record<string, RecordData[]> = { TENANTS };
