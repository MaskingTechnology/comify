
import type { Requester } from '^/domain/authentication/types';

import translateToRequester from '../translateToRequester/feature';
import type { DataModel } from '../types';

import retrieveData from './retrieveData';

export default async function feature(requester: Requester, followerId: string, limit: number | undefined = undefined, offset: number | undefined = undefined): Promise<DataModel[]>
{
    const data = await retrieveData(followerId, limit, offset);

    return translateToRequester(requester, 'following', data);
}
