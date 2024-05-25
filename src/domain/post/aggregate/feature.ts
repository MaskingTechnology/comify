
import type Requester from '^/domain/authentication/Requester';
import { AggregatedData as ComicData } from '^/domain/comic/aggregate/feature';
import getComicView from '^/domain/comic/get/feature';
import ratingExists from '^/domain/rating/exists/feature';
import getRelationView from '^/domain/relation/get';
import type RelationView from '^/domain/relation/view/RelationView';

export type Data = {
    readonly id: string;
    readonly creatorId: string;
    readonly comicId: string;
    readonly createdAt: string;
    readonly ratingCount: number;
    readonly reactionCount: number;
};

export type AggregatedData = {
    readonly id: string;
    readonly createdAt: string;
    readonly creator: RelationView;
    readonly comic: ComicData;
    readonly ratingCount: number;
    readonly reactionCount: number;
    readonly hasRated: boolean;
};

export default async function createView(requester: Requester, data: Data): Promise<AggregatedData>
{
    const [creatorView, comicData, hasRated] = await Promise.all([
        getRelationView(requester.id, data.creatorId),
        getComicView(data.comicId),
        ratingExists(requester.id, data.id, undefined),
    ]);

    return {
        id: data.id,
        createdAt: data.createdAt,
        creator: creatorView,
        comic: comicData,
        ratingCount: data.ratingCount,
        reactionCount: data.reactionCount,
        hasRated
    };
}
