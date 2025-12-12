
import type { AggregatedData as AggregatedComicData } from '~/comic/aggregate';
import type { DataModel as CommentData } from '~/comment';
import type { DataModel as MetricsData } from '~/post.metrics';
import type { AggregatedData as AggregatedRelationData } from '~/relation/aggregate';

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
