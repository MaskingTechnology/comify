
import type { BaseData, CountOperation } from '../definitions';

export type Data = BaseData &
{
    readonly postId: string;
    readonly ratings: number;
    readonly reactions: number;
    readonly popularity: number;
};

export type Metrics = Omit<Data, 'id'>;

export type { CountOperation };

export const RECORD_TYPE = 'post.metrics';
export const EVENT_CHANNEL = 'post.metrics';
