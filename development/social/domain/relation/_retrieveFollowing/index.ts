
import type { Requester } from '~/authentication';

import translateToRequester from '../_translateToRequester';
import type { Data } from '../definitions';

import retrieveData from './retrieveData';

export default async function run(requesterId: string, followerId: string, limit: number | undefined = undefined, offset: number | undefined = undefined): Promise<Data[]>
{
    const data = await retrieveData(followerId, limit, offset);

    return translateToRequester(requesterId, 'following', data);
}
