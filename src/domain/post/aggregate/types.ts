
import type { AggregatedData as AggregatedComicData } from '^/domain/comic/aggregate';
import type { DataModel as CommentData } from '^/domain/comment';
import type { DataModel as MetricsData } from '^/domain/post.metrics';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

type AggregatedData = {
    readonly id: string;
    readonly createdAt: string;
    readonly creator: AggregatedRelationData;
    readonly comic?: AggregatedComicData;
    readonly comment?: CommentData;
    readonly parentId?: string;
    readonly hasParent: boolean;
    readonly metrics: MetricsData;
    readonly isRated: boolean;
};

export type { AggregatedData };
