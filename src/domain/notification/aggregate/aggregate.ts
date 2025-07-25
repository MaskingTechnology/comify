
import type { Requester } from '^/domain/authentication';
import { default as getPostData } from '^/domain/post/getByIdAggregated';
import getRelationData from '^/domain/relation/getAggregated';
import type { Tenant } from '^/domain/tenant';

import type { DataModel } from '../types';
import type { AggregatedData } from './types';

export default async function aggregate(tenant: Tenant, requester: Requester, data: DataModel): Promise<AggregatedData>
{
    const [relationData, postData] = await Promise.all([
        getRelationData(tenant, requester, data.receiverId, data.senderId),
        data.postId ? getPostData(tenant, requester, data.postId) : Promise.resolve(undefined)
    ]);

    return {
        id: data.id,
        createdAt: data.createdAt,
        type: data.type,
        relation: relationData,
        post: postData
    };
}
