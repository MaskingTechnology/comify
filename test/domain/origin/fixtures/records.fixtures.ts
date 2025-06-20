
import type { RecordData } from '^/integrations/database';

import type { DataModel as OriginDataModel } from '^/domain/origin';

import { VALUES } from './values.fixtures';

export const ORIGINS: OriginDataModel[] = [
    { id: VALUES.IDS.ORIGIN1, origin: VALUES.ORIGINS.ORIGIN1, tenantId: VALUES.IDS.TENANT1 },
    { id: VALUES.IDS.ORIGIN2, origin: VALUES.ORIGINS.ORIGIN2, tenantId: VALUES.IDS.TENANT1 },
];

export const RECORDS: Record<string, RecordData[]> = { ORIGINS };
