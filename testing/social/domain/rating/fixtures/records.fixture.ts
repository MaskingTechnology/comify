
import type { RecordData } from '@theshelf/database';

import type { DataModel as RatingDataModel } from '^/domain/rating';

import { REQUESTERS } from './requesters.fixture';
import { VALUES } from './values.fixture';

const NOW = new Date().toISOString();

const RATINGS: RatingDataModel[] = [
    { id: VALUES.IDS.RATING, creatorId: REQUESTERS.CREATOR1.id, postId: VALUES.IDS.POST_RATED, createdAt: NOW }
];

export const RECORDS: Record<string, RecordData[]> = { RATINGS };
