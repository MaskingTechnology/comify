
import { type Record as MetricsRecord } from '@comify/social/domain/post.metrics';

import { POST_RECORDS, REACTION_RECORDS } from './posts.fixture';

export const POST_METRICS_RECORDS: Record<string, MetricsRecord> = {
    FIRST: { id: '1d9aadf2-f0a1-4dc7-afff-3492e0f93092', postId: POST_RECORDS.FIRST.id, ratings: 3, reactions: 2, popularity: 0 },
    SECOND: { id: 'ecdf1ae0-a198-4200-90f8-6c595cf77660', postId: POST_RECORDS.SECOND.id, ratings: 0, reactions: 0, popularity: 0 },
    THIRD: { id: '7e3eb546-383e-4038-8eb8-1e13caf45f92', postId: POST_RECORDS.THIRD.id, ratings: 0, reactions: 0, popularity: 0 },
    FOURTH: { id: 'c5191fff-3714-41e7-9fcc-99703381e4fc', postId: POST_RECORDS.FOURTH.id, ratings: 0, reactions: 0, popularity: 0 },
    FIFTH: { id: '46f0158a-38d8-44ea-8bf9-120e79cda027', postId: POST_RECORDS.FIFTH.id, ratings: 0, reactions: 0, popularity: 0 },
    SIXTH: { id: 'd2d23038-b44c-493f-85df-371447f0b76b', postId: POST_RECORDS.SIXTH.id, ratings: 0, reactions: 0, popularity: 0 },
    SEVENTH: { id: 'f2757eaf-f78c-43f7-9499-e6f9760a444f', postId: POST_RECORDS.SEVENTH.id, ratings: 0, reactions: 0, popularity: 0 },
    DELETED: { id: '44d6f867-0c4c-400c-a633-cd09670934b9', postId: POST_RECORDS.DELETED.id, ratings: 0, reactions: 0, popularity: 0 }
} as const;

export const REACTION_METRICS_RECORDS: Record<string, MetricsRecord> = {
    COMIC: { id: '27dcfa75-bc8a-48ef-b4f7-b754a9e946d2', postId: REACTION_RECORDS.COMIC.id, ratings: 0, reactions: 0, popularity: 0 },
    COMMENT: { id: '342dd558-bb97-44bc-9e3a-0e04ac5effcf', postId: REACTION_RECORDS.COMMENT.id, ratings: 0, reactions: 0, popularity: 0 },
    DELETED: { id: '558c30b9-d764-4234-a2f6-bd602698386a', postId: REACTION_RECORDS.DELETED.id, ratings: 0, reactions: 0, popularity: 0 }
} as const;

export type POST_METRICS_RECORDS = typeof POST_METRICS_RECORDS[keyof typeof POST_METRICS_RECORDS];
export type REACTION_METRICS_RECORDS = typeof REACTION_METRICS_RECORDS[keyof typeof REACTION_METRICS_RECORDS];
