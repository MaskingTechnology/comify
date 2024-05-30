
import type Requester from '^/domain/authentication/Requester';
import getPostView from '^/domain/post/getByIdAggregated/feature';
import getReactionView from '^/domain/reaction/get';
import getRelationView from '^/domain/relation/get';

import type { DataModel } from '../types';
import type { AggregatedData } from './types';

export default async function feature(requester: Requester, data: DataModel): Promise<AggregatedData>
{
    const [relationData, postData, reactionData] = await Promise.all([
        getRelationView(data.receiverId, data.senderId),
        data.postId ? getPostView(requester, data.postId) : undefined,
        data.reactionId ? getReactionView(requester, data.reactionId) : undefined
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
