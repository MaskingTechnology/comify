
import { type Count } from '@comify/common/primitives/count';

import { type BaseRecord } from '../definitions';

export type Record = BaseRecord &
{
    readonly postId: string;
    readonly ratings: number;
    readonly reactions: number;
    readonly popularity: number;
};

export type Metrics = {
    readonly ratings: Count;
    readonly reactions: Count;
    readonly popularity: Count;
};

export const RECORD_TYPE = 'post.metrics';
