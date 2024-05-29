
import { AggregatedData as ComicData } from '^/domain/comic/aggregate/types';
// import { AggregatedData as RelationData } from '^/domain/relation/aggregate/types';
import type RelationData from '^/domain/relation/view/RelationView';

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
