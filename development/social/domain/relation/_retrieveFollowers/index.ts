
import type { Requester } from '~/authentication';

import translateToRequester from '../_translateToRequester';
import type { Record } from '../definitions';

import retrieve from './retrieve';

export default async function run(requester: Requester, followingId: string, limit: number, offset: number): Promise<Record[]>
{
    const records = await retrieve(followingId, limit, offset);

    return translateToRequester(requester.id, 'follower', records);
}
