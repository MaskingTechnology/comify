
import { type Requester } from '@comify/common/security';
import getPostData from '~/post/getById';
import getRelationData from '~/relation/get';

import type { Record, Notification } from '../definitions';

export default async function toModel(requester: Requester, record: Record): Promise<Notification>
{
    const [relationData, postData] = await Promise.all([
        getRelationData(requester, record.receiverId, record.senderId),
        record.postId ? getPostData(requester, record.postId) : Promise.resolve(undefined)
    ]);

    return {
        createdAt: record.createdAt,
        type: record.type,
        relation: relationData,
        post: postData
    };
}
