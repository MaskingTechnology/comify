
import { type Identifier } from '@comify/common/primitives/identifier';

import type { Relation } from '~/relation';
import type { Post } from '~/post';

import type { BaseRecord } from '../definitions';

export type Record = BaseRecord & {
    readonly createdAt: string;
    readonly type: string;
    readonly senderId: string;
    readonly receiverId: string;
    readonly postId?: string;
    readonly deleted: boolean;
};

export const Types = {
    STARTED_FOLLOWING: 'started-following',
    RATED_POST: 'rated-post',
    REACTED_TO_POST: 'added-reaction'
} as const;

type TypeKeys = keyof typeof Types;
export type Type = typeof Types[TypeKeys];

export type Notification = {
    readonly id: Identifier;
    readonly type: Type;
    readonly createdAt: Date;
    readonly relation: Relation;
    readonly post?: Post;
};
export const RECORD_TYPE = 'notification';
