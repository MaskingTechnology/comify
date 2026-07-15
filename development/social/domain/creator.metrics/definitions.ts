
import type { BaseData, CountOperation } from '../definitions';

export type Data = BaseData &
{
    readonly creatorId: string;
    readonly posts: number;
    readonly followers: number;
    readonly following: number;
    readonly popularity: number;
};

export type Metrics = Omit<Data, 'id' | 'creatorId'>

export type { CountOperation };

export const RECORD_TYPE = 'creator.metrics';
export const EVENT_CHANNEL = 'creator.metrics';
