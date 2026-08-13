
import { type Record as RelationRecord } from '@comify/social/domain/relation';

import { CREATOR_RECORDS } from './creators.fixture';

export const RELATION_RECORDS: Record<string, RelationRecord> = {
    BOB_ALICE: { id: '6a08816d-9822-4555-b7cf-a2f88361f6e7', followerId: CREATOR_RECORDS.BOB.id, followingId: CREATOR_RECORDS.ALICE.id },
    BOB_DAVID: { id: '6a08816d-9822-4555-b7cf-a2f88361f6e7', followerId: CREATOR_RECORDS.BOB.id, followingId: CREATOR_RECORDS.DAVID.id },
    CHARLIE_ALICE: { id: 'a0a7c60c-452f-4fae-997d-d009ee73103b', followerId: CREATOR_RECORDS.CHARLIE.id, followingId: CREATOR_RECORDS.ALICE.id },
    DAVID_BOB: { id: '5116fc59-ac26-4807-b897-34a77a6fc1e7', followerId: CREATOR_RECORDS.DAVID.id, followingId: CREATOR_RECORDS.BOB.id }
} as const;

export type RELATION_RECORDS = typeof RELATION_RECORDS[keyof typeof RELATION_RECORDS];