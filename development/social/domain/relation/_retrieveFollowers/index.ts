
import type { Requester } from '~/authentication';

import translateToRequester from '../_translateToRequester';
import type { Data } from '../definitions';

import retrieveData from './retrieveData';

export default async function run(requester: Requester, followingId: string, limit: number, offset: number): Promise<Data[]>
{
    const data = await retrieveData(followingId, limit, offset);

    return translateToRequester(requester.id, 'follower', data);
}
