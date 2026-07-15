
import type { BaseData } from '../definitions';

export type Data = BaseData &
{
    readonly id: string;
    readonly creatorId: string;
    readonly postId: string;
    readonly createdAt: string;
};

export const RECORD_TYPE = 'rating';
export const EVENT_CHANNEL = 'rating';
