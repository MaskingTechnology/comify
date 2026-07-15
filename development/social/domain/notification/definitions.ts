
import { Relation } from '~/relation';
import { Post } from '~/post';

import type { BaseData } from '../definitions';

export type Data = BaseData &
{
    readonly createdAt: string;
    readonly type: string;
    readonly senderId: string;
    readonly receiverId: string;
    readonly postId?: string;
};

export type Notification = Pick<Data, 'createdAt' | 'type'> &
{
    readonly relation: Relation;
    readonly post?: Post;
};
export const RECORD_TYPE = 'notification';

export const Types = {
    STARTED_FOLLOWING: 'started-following',
    RATED_POST: 'rated-post',
    REACTED_TO_POST: 'added-reaction'
} as const;

type TypeKeys = keyof typeof Types;

export type Type = typeof Types[TypeKeys]; 
