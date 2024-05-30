
import type { AggregatedData as ComicData } from '^/domain/comic/aggregate/types';
import type { AggregatedData as RelationData } from '^/domain/relation/aggregate/types';

type AggregatedData = {
    readonly id: string;
    readonly createdAt: string;
    readonly creator: RelationData;
    readonly comic: ComicData;
    readonly ratingCount: number;
    readonly reactionCount: number;
    readonly hasRated: boolean;
};

export type { AggregatedData };
