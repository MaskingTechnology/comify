
import type { RecordData } from '@theshelf/database';

import type { Record as CreatorRecord } from '@comify/social/domain/creator';

import { TENANTS } from './tenants.fixture';
import { VALUES } from './values.fixture';

const DEFAULT_DATA = { tenantId: TENANTS.default.id, portraitId: undefined, joinedAt: new Date().toISOString() };

const CREATORS: CreatorRecord[] = [
    { id: VALUES.IDS.CREATOR, fullName: VALUES.FULL_NAMES.CREATOR, nickname: VALUES.NICKNAMES.CREATOR, email: VALUES.EMAILS.CREATOR, ...DEFAULT_DATA }
];

export const RECORDS: Record<string, RecordData[]> = { CREATORS };
