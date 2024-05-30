
import type Requester from '^/domain/authentication/Requester';
import getPostData from '^/domain/post/getByIdAggregated/feature';
import getReactionData from '^/domain/reaction/getByIdAggregated/feature';
import getRelationData from '^/domain/relation/get';

import type { DataModel } from '../types';
import type { AggregatedData } from './types';

export default async function feature(requester: Requester, data: DataModel): Promise<AggregatedData>
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
