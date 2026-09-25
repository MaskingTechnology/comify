
import { type Count } from '@comify/common/primitives/count';

import { type BaseRecord } from '../definitions';

export type Record = BaseRecord & {
    readonly creatorId: string;
    readonly posts: number;
    readonly followers: number;
    readonly following: number;
    readonly popularity: number;
};

export type Metrics = {
    posts: Count;
    followers: Count;
    following: Count;
    popularity: Count;
};

export const RECORD_TYPE = 'creator.metrics';
