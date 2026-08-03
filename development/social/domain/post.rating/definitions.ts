
import type { BaseRecord } from '../definitions';

export type Record = BaseRecord & {
    readonly id: string;
    readonly creatorId: string;
    readonly postId: string;
    readonly createdAt: string;
};

// A rating does not have a specific domain representation.

export type RatingId = string;

export type RatingKey = {
    readonly creatorId: string;
    readonly postId: string;
};

export const RECORD_TYPE = 'post.rating';
