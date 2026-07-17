
import type { BaseData } from '../definitions';

export type Record = BaseData &
{
    readonly id: string;
    readonly creatorId: string;
    readonly postId: string;
    readonly createdAt: string;
};

// A rating does not have a specific domain representation.

export const RECORD_TYPE = 'rating';
export const EVENT_CHANNEL = 'rating';
