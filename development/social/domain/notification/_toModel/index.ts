
import type { Tenant } from '@comify/common/domain/tenant';

import type { Requester } from '~/authentication';
import getPostData from '~/post/getByIdAggregated';
import getRelationData from '~/relation/get';

import type { Data, Notification } from '../definitions';

export default async function aggregate(tenant: Tenant, requester: Requester, data: Data): Promise<Notification>
{
    const [relationData, postData] = await Promise.all([
        getRelationData(tenant, requester, data.receiverId, data.senderId),
        data.postId ? getPostData(tenant, requester, data.postId) : Promise.resolve(undefined)
    ]);

    return {
        createdAt: data.createdAt,
        type: data.type,
        relation: relationData,
        post: postData
    };
}
