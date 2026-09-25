
import { type Record as NotificationRecord, Types } from '@comify/social/domain/notification';

import { CREATOR_RECORDS } from './creators.fixture';
import { POST_RECORDS } from './posts.fixture';

export const NOTIFICATION_RECORDS: Record<string, NotificationRecord> = {
    // Following
    BOB_FOLLOWING_ALICE: { id: '837c61e0-8386-4edc-adc8-6797692d0b7e', type: Types.STARTED_FOLLOWING, senderId: CREATOR_RECORDS.BOB.id, receiverId: CREATOR_RECORDS.ALICE.id, createdAt: new Date(2024, 5, 25).toISOString(), deleted: false },
    BOB_FOLLOWING_DAVID: { id: 'd6e868a9-9b76-4cc9-8dd4-b2442402e3fb', type: Types.STARTED_FOLLOWING, senderId: CREATOR_RECORDS.BOB.id, receiverId: CREATOR_RECORDS.DAVID.id, createdAt: new Date(2024, 7, 25).toISOString(), deleted: false },
    CHARLIE_FOLLOWING_ALICE: { id: 'adc61fa7-e68b-4947-a120-518ef6aa67ff', type: Types.STARTED_FOLLOWING, senderId: CREATOR_RECORDS.CHARLIE.id, receiverId: CREATOR_RECORDS.ALICE.id, createdAt: new Date(2024, 6, 25).toISOString(), deleted: false },
    DAVID_FOLLOWING_BOB: { id: '2a8dbb44-74b2-4ed0-94b6-145396bddbd5', type: Types.STARTED_FOLLOWING, senderId: CREATOR_RECORDS.DAVID.id, receiverId: CREATOR_RECORDS.BOB.id, createdAt: new Date(2024, 7, 25).toISOString(), deleted: false },

    // Rated
    BOB_RATED_FIRST: { id: '29f4db7f-cc52-4e87-bf7c-a51b7a63f4bb', type: Types.RATED_POST, senderId: CREATOR_RECORDS.BOB.id, receiverId: POST_RECORDS.FIRST.creatorId, postId: POST_RECORDS.FIRST.id, createdAt: new Date(2024, 6, 25).toISOString(), deleted: false },
    CHARLIE_RATED_FIRST: { id: '0ac3dbf5-bebd-4191-866e-fc5fad1eb6f6', type: Types.RATED_POST, senderId: CREATOR_RECORDS.CHARLIE.id, receiverId: POST_RECORDS.FIRST.creatorId, postId: POST_RECORDS.FIRST.id, createdAt: new Date(2024, 5, 25).toISOString(), deleted: false },
    DAVID_RATED_FIRST: { id: '6384b1e3-8575-4a54-9b65-e48f1d5fec92', type: Types.RATED_POST, senderId: CREATOR_RECORDS.DAVID.id, receiverId: POST_RECORDS.FIRST.creatorId, postId: POST_RECORDS.FIRST.id, createdAt: new Date(2024, 7, 25).toISOString(), deleted: false },

    // Reacted
    BOB_REACTED_TO_FIRST: { id: 'ee42e7f7-a811-4520-9c8c-b48f98da832a', type: Types.REACTED_TO_POST, senderId: CREATOR_RECORDS.BOB.id, receiverId: POST_RECORDS.FIRST.creatorId, postId: POST_RECORDS.FIRST.id, createdAt: new Date(2024, 5, 24).toISOString(), deleted: false },
    CHARLIE_REACTED_TO_FIRST: { id: 'f3ec6acc-8068-4bab-9feb-f6c3e24a2042', type: Types.REACTED_TO_POST, senderId: CREATOR_RECORDS.CHARLIE.id, receiverId: POST_RECORDS.FIRST.creatorId, postId: POST_RECORDS.FIRST.id, createdAt: new Date(2024, 6, 7).toISOString(), deleted: false },
    GEORGE_REACTED_TO_FIFTH: { id: '4459cf76-a98e-4741-90d2-c2d7b041b278', type: Types.REACTED_TO_POST, senderId: CREATOR_RECORDS.GEORGE.id, receiverId: POST_RECORDS.FIFTH.creatorId, postId: POST_RECORDS.FIFTH.id, createdAt: new Date(2024, 7, 18).toISOString(), deleted: true }
};

export type NOTIFICATION_RECORDS = typeof NOTIFICATION_RECORDS[keyof typeof NOTIFICATION_RECORDS];
