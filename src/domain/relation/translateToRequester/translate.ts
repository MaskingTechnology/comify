
import { Requester } from '^/domain/authentication';

import get from '../get';
import { DataModel } from '../types';

import { Mapping } from './types';

export default async function translate(requester: Requester, mapping: Mapping, data: DataModel): Promise<DataModel>
{
    const followingId: string = mapping === 'follower'
        ? data.followerId
        : data.followingId;

    if (requester.id === data.followerId && followingId === data.followingId)
    {
        return data;
    }

    return get(requester.id, followingId);
}
