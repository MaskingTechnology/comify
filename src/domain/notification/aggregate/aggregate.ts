
import { Requester } from '^/domain/authentication';
import getPostData from '^/domain/post/getByIdAggregated';
import getReactionData from '^/domain/reaction/getByIdAggregated';
import getRelationData from '^/domain/relation/getAggregated';

import type { DataModel } from '../types';
import type { AggregatedData } from './types';

export default async function aggregate(requester: Requester, data: DataModel): Promise<AggregatedData>
{
    const [relationData, postData, reactionData] = await Promise.all([
        getRelationData(data.receiverId, data.senderId),
        data.postId ? getPostData(requester, data.postId) : undefined,
        data.reactionId ? getReactionData(requester, data.reactionId) : undefined
    ]);

    return {
        id: data.id,
        createdAt: data.createdAt,
        type: data.type,
        relation: relationData,
        post: postData,
        reaction: reactionData
    };
}
