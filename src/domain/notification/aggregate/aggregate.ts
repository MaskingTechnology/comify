
import { Requester } from '^/domain/authentication';
import getPostData from '^/domain/post/getByIdAggregated';
import getReactionData from '^/domain/reaction/getByIdAggregated';
import getRelationData from '^/domain/relation/getAggregated';

import type { DataModel } from '../types';
import type { AggregatedData } from './types';

export default async function aggregate(requester: Requester, data: DataModel): Promise<AggregatedData>
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
