
import type { Requester } from '^/domain/authentication';
import { default as getPostData } from '^/domain/post/getByIdAggregated';
import getRelationData from '^/domain/relation/getAggregated';

import type { DataModel } from '../types';
import type { AggregatedData } from './types';

export default async function aggregate(requester: Requester, data: DataModel): Promise<AggregatedData>
{
    const [relationData, postData] = await Promise.all([
        getRelationData(data.receiverId, data.senderId),
        data.postId ? getPostData(requester, data.postId) : Promise.resolve(undefined)
    ]);

    return {
        id: data.id,
        createdAt: data.createdAt,
        type: data.type,
        relation: relationData,
        post: postData
    };
}
