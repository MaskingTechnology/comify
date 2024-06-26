
import type { Requester } from '^/domain/authentication/types';

import translateToRequester from '../translateToRequester/feature';
import type { DataModel } from '../types';

import retrieveData from './retrieveData';

export default async function feature(requester: Requester, followingId: string, limit: number, offset: number): Promise<DataModel[]>
{
    const data = await retrieveData(followingId, limit, offset);

    return translateToRequester(requester, 'follower', data);
}
