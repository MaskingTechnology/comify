
import type { Requester } from '~/authentication';

import translateToRequester from '../translateToRequester';
import type { BaseData } from '../definitions';
import retrieveData from './retrieveData';

export default async function getFollowing(requester: Requester, followerId: string, limit: number | undefined = undefined, offset: number | undefined = undefined): Promise<DataModel[]>
{
    const data = await retrieveData(followerId, limit, offset);

    return translateToRequester(requester, 'following', data);
}
