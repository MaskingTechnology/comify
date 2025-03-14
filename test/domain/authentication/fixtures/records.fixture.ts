
import type { RecordData } from '^/integrations/database';

import type { DataModel as CreatorDataModel } from '^/domain/creator';

import { VALUES } from './values.fixture';

const DEFAULT_DATA = { portraitId: undefined, joinedAt: new Date().toISOString() };

const CREATORS: CreatorDataModel[] = [
    { id: VALUES.IDS.FIRST, fullName: VALUES.FULL_NAMES.FIRST, nickname: VALUES.NICKNAMES.FIRST, email: VALUES.EMAILS.FIRST, ...DEFAULT_DATA },
    { id: VALUES.IDS.SECOND, fullName: VALUES.FULL_NAMES.SECOND, nickname: VALUES.NICKNAMES.SECOND, email: VALUES.EMAILS.SECOND, ...DEFAULT_DATA },
    { id: VALUES.IDS.THIRD, fullName: VALUES.FULL_NAMES.THIRD, nickname: VALUES.NICKNAMES.THIRD, email: VALUES.EMAILS.THIRD, ...DEFAULT_DATA },
    { id: VALUES.IDS.FOURTH, fullName: VALUES.FULL_NAMES.FOURTH, nickname: VALUES.NICKNAMES.FOURTH, email: VALUES.EMAILS.FOURTH, ...DEFAULT_DATA },
    { id: VALUES.IDS.FIFTH, fullName: VALUES.FULL_NAMES.FIFTH, nickname: VALUES.NICKNAMES.FIFTH, email: VALUES.EMAILS.FIFTH, ...DEFAULT_DATA },
    { id: VALUES.IDS.SIXTH, fullName: VALUES.FULL_NAMES.SIXTH, nickname: VALUES.NICKNAMES.SIXTH, email: VALUES.EMAILS.SIXTH, ...DEFAULT_DATA }
];

export const RECORDS: Record<string, RecordData[]> = { CREATORS };
