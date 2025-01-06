
import type { Requester } from '^/domain/authentication/types';
import getPostData from '^/domain/post/getByIdAggregated/feature';
import getReactionData from '^/domain/reaction/getByIdAggregated/feature';
import getRelationData from '^/domain/relation/getAggregated/feature';

import type { DataModel } from '../types';
import type { AggregatedData } from './types';

export default async function feature(requester: Requester, data: DataModel): Promise<AggregatedData>
{
    const [relationData, postData, targetReactionData, sourceReactionData] = await Promise.all([
        getRelationData(data.receiverId, data.senderId),
        data.targetPostId ? getPostData(requester, data.targetPostId) : undefined,
        data.targetReactionId ? getReactionData(requester, data.targetReactionId) : undefined,
        data.sourceReactionId ? getReactionData(requester, data.sourceReactionId) : undefined
    ]);

    return {
        id: data.id,
        createdAt: data.createdAt,
        type: data.type,
        relation: relationData,
        targetPost: postData,
        targetReaction: targetReactionData,
        sourceReaction: sourceReactionData
    };
}
