
import { type Record as RatingRecord } from '@comify/social/domain/post.rating';

import { CREATOR_RECORDS } from './creators.fixture';
import { POST_RECORDS } from './posts.fixture';

export const RATING_RECORDS: Record<string, RatingRecord> = {
    BOB_FIRST: { id: '31d0c22a-5207-4465-b494-eda0510b247c', creatorId: CREATOR_RECORDS.BOB.id, postId: POST_RECORDS.FIRST.id, createdAt: new Date(2024, 5, 25).toISOString() },
    CHARLIE_FIRST: { id: '8400368a-3c2a-4fc3-b07b-a4b32a1eadc1', creatorId: CREATOR_RECORDS.CHARLIE.id, postId: POST_RECORDS.FIRST.id, createdAt: new Date(2024, 6, 25).toISOString() },
    DAVID_FIRST: { id: '4b9a4201-f3c4-416e-8341-e7671d53456f', creatorId: CREATOR_RECORDS.DAVID.id, postId: POST_RECORDS.FIRST.id, createdAt: new Date(2024, 7, 25).toISOString() }
} as const;

export type RATING_RECORDS = typeof RATING_RECORDS[keyof typeof RATING_RECORDS];
