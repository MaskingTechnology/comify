
import { type Record as CommentRecord } from '@comify/social/domain/post.comment';

export const COMMENT_RECORDS: Record<string, CommentRecord> = {
    FIRST: { id: 'feef2d49-a178-46a1-adc0-d6653b266434', message: 'This is a comment.' }
} as const;

export type COMMENT_RECORDS = typeof COMMENT_RECORDS[keyof typeof COMMENT_RECORDS];
