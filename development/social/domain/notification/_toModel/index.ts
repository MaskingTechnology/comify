
import type { Tenant } from '@comify/common/domain/tenant';

import type { Requester } from '~/authentication';
import getPostData from '~/post/getById';
import getRelationData from '~/relation/get';

import type { Record, Notification } from '../definitions';

export default async function toModel(tenant: Tenant, requester: Requester, record: Record): Promise<Notification>
{
    const [relationData, postData] = await Promise.all([
        getRelationData(tenant, requester, record.receiverId, record.senderId),
        record.postId ? getPostData(tenant, requester, record.postId) : Promise.resolve(undefined)
    ]);

    return {
        createdAt: record.createdAt,
        type: record.type,
        relation: relationData,
        post: postData
    };
}
