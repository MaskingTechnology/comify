
import type { RecordData } from '@theshelf/database';

import type { DataModel as CreatorDataModel } from '^/domain/creator';

import { TENANTS } from './tenants.fixture';
import { VALUES } from './values.fixture';

const DEFAULT_DATA = { tenantId: TENANTS.default.id, portraitId: undefined, joinedAt: new Date().toISOString() };

const CREATORS: CreatorDataModel[] = [
    { id: VALUES.IDS.CREATOR, fullName: VALUES.FULL_NAMES.CREATOR, nickname: VALUES.NICKNAMES.CREATOR, email: VALUES.EMAILS.CREATOR, ...DEFAULT_DATA }
];

export const RECORDS: Record<string, RecordData[]> = { CREATORS };
