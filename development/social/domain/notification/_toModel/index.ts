
import { type Requester } from '@comify/common/security';
import getPost from '~/post/getById';
import getRelation from '~/relation/get';

import type { Record, Notification } from '../definitions';

export default async function (requester: Requester, record: Record): Promise<Notification>
{
    const [relation, post] = await Promise.all([
        getRelation(requester, { followerId: record.receiverId, followingId: record.senderId }),
        record.postId ? getPost(requester, record.postId) : Promise.resolve(undefined)
    ]);

    return {
        createdAt: record.createdAt,
        type: record.type,
        relation,
        post
    };
}
