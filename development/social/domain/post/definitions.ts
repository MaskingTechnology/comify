
import { type Identifier } from '@comify/common/primitives/identifier';

import { type Comic } from '~/post.comic';
import { type Comment } from '~/post.comment';
import { type Metrics } from '~/post.metrics';
import { type Relation } from '~/relation';

import { type BaseRecord } from '../definitions';

export type Record = BaseRecord & {
    readonly tenantId: string;
    readonly id: string;
    readonly creatorId: string;
    readonly comicId?: string;
    readonly commentId?: string;
    readonly parentId?: string;
    readonly createdAt: string;
    readonly deleted: boolean;
};

export type Post = {
    readonly id: Identifier;
    readonly parentId?: Identifier;
    readonly createdAt: Date;
    readonly creator: Relation;
    readonly comic?: Comic;
    readonly comment?: Comment;
    readonly hasParent: boolean;
    readonly metrics: Metrics;
    readonly isRated: boolean;
};

export const RECORD_TYPE = 'post';
