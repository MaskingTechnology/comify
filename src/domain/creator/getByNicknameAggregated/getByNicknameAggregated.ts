
import type { Requester } from '^/domain/authentication';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getByNickname from '../getByNickname';

export default async function getByNicknameAggregated(requester: Requester, nickname: string): Promise<AggregatedData>
{
    const data = await getByNickname(nickname, requester.tenantId);

    return aggregate(data);
}
