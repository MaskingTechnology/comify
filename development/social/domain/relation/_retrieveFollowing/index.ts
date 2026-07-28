
import translateToRequester from '../_translateToRequester';
import type { Record } from '../definitions';

import retrieve from './retrieve';

export default async function (requesterId: string, followerId: string, limit: number | undefined = undefined, offset: number | undefined = undefined): Promise<Record[]>
{
    const records = await retrieve(followerId, limit, offset);

    return translateToRequester(requesterId, 'following', records);
}
