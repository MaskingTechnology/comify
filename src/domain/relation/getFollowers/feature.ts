
import type { Requester } from '^/domain/authentication/types';
import { Range } from '^/domain/types';

import translateToRequester from '../translateToRequester/feature';
import type { DataModel } from '../types';

import retrieveData from './retrieveData';

export default async function feature(requester: Requester, followingId: string, range: Range): Promise<DataModel[]>
{
    const data = await retrieveData(followingId, range.offset, range.limit);

    return requester.id !== followingId
        ? translateToRequester(requester, data)
        : data;
}
