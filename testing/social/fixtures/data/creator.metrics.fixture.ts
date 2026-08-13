
import { type Record as MetricsRecord } from '@comify/social/domain/creator.metrics';

import { CREATOR_RECORDS } from './creators.fixture';

export const CREATOR_METRICS_RECORDS: Record<string, MetricsRecord> = {
    ALICE: { id: '6ae7d924-7180-4b56-9287-940375632729', creatorId: CREATOR_RECORDS.ALICE.id, posts: 0, followers: 2, following: 0, popularity: 0 },
    BOB: { id: '0cb580d5-6661-4a4e-85fc-ccb84998060c', creatorId: CREATOR_RECORDS.ALICE.id, posts: 0, followers: 1, following: 2, popularity: 0 },
    CHARLIE: { id: 'f4fb3343-5b34-448e-9c43-22948e0c6ac5', creatorId: CREATOR_RECORDS.ALICE.id, posts: 0, followers: 0, following: 1, popularity: 0 },
    DAVID: { id: '217f7cfd-9bf9-41a9-a1de-426687351482', creatorId: CREATOR_RECORDS.ALICE.id, posts: 0, followers: 1, following: 1, popularity: 0 },
    EVE: { id: 'ad857a99-94be-49df-9aca-509c227f2908', creatorId: CREATOR_RECORDS.ALICE.id, posts: 0, followers: 0, following: 0, popularity: 0 },
    FELIX: { id: 'e9219aa0-12a8-4c3e-9f83-6adeb234ce7a', creatorId: CREATOR_RECORDS.ALICE.id, posts: 0, followers: 0, following: 0, popularity: 0 },
    GEORGE: { id: 'b09d4585-7db9-4e02-99ce-22e83f4a9d29', creatorId: CREATOR_RECORDS.ALICE.id, posts: 0, followers: 0, following: 0, popularity: 0 },
    HENRY: { id: 'e3751bdf-68ef-447a-9b2b-f2dd8b8587cc', creatorId: CREATOR_RECORDS.ALICE.id, posts: 0, followers: 0, following: 0, popularity: 0 }
} as const;

export type CREATOR_METRICS_RECORDS = typeof CREATOR_METRICS_RECORDS[keyof typeof CREATOR_METRICS_RECORDS];
