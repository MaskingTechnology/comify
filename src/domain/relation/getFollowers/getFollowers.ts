
import type { Requester } from '^/domain/authentication';

import translateToRequester from '../translateToRequester';
import type { DataModel } from '../types';
import retrieveData from './retrieveData';

export default async function getFollowers(requester: Requester, followingId: string, limit: number, offset: number): Promise<DataModel[]>
{
    const data = await retrieveData(followingId, limit, offset);

    return translateToRequester(requester, 'follower', data);
}
