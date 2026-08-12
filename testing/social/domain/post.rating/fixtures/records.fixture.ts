
import type { RecordData } from '@theshelf/database';

import type { Record as RatingRecord } from '@comify/social/domain/post.rating';

import { REQUESTERS } from './requesters.fixture';
import { VALUES } from './values.fixture';

const NOW = new Date().toISOString();

const RATINGS: RatingRecord[] = [
    { id: VALUES.IDS.RATING, creatorId: REQUESTERS.CREATOR1.principalId, postId: VALUES.IDS.POST_RATED, createdAt: NOW }
];

export const RECORDS: Record<string, RecordData[]> = { RATINGS };
