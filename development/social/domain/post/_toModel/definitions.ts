
import { type Comic } from '~/post.comic';
import { type Comment } from '~/post.comment';
import { type Metrics } from '~/post.metrics';
import { type Relation } from '~/relation';

export type References = {
    readonly relation: Relation;
    readonly isRated: boolean;
    readonly comic?: Comic;
    readonly comment?: Comment;
    readonly metrics: Metrics;
};
