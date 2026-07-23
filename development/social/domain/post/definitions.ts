
import type { Comic } from '~/post.comic';
import type { Comment } from '~/post.comment';
import type { Metrics } from '~/post.metrics';
import type { Relation } from '~/relation';
import type { BaseData, CountOperation } from '../definitions';

export type Record = BaseData &
{
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
    readonly id: string;
    readonly createdAt: string;
    readonly creator: Relation;
    readonly comic?: Comic;
    readonly comment?: Comment;
    readonly parentId?: string;
    readonly hasParent: boolean;
    readonly metrics: Metrics;
    readonly isRated: boolean;
};

export type { CountOperation };

export const RECORD_TYPE = 'post';
export const EVENT_CHANNEL = 'post';
