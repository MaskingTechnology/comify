
import type Requester from '^/domain/authentication/Requester';

import translateToRequester from '../translateToRequester/feature';
import type { DataModel } from '../types';

import retrieveData from './retrieveData';

export default async function feature(requester: Requester, followingId: string): Promise<DataModel[]>
{
    const data = await retrieveData(followingId);

    return requester.id !== followingId
        ? translateToRequester(requester, data)
        : data;
}
