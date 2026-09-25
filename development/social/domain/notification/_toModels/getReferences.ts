
import { type Requester } from '@comify/common/security';

import getPosts from '~/post/getManyById';
import getRelations from '~/relation/getMany';

import { type Record } from '../definitions';

import { type References } from './definitions';

export default async function (requester: Requester, records: Record[]): Promise<References>
{
    const postIds = Array.from(new Set(records.map(record => record.postId).filter(id => id !== undefined)));
    const relationKeys = Array.from(new Set(records.map(record => { return { followerId: record.receiverId, followingId: record.senderId }; })));

    const [postMap, relationMap] = await Promise.all([
        getPosts(requester, postIds),
        getRelations(requester, relationKeys)
    ]);

    return { postMap, relationMap };
}
