
import type { Requester } from '^/domain/authentication';
import type { Tenant } from '^/domain/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getByNickname from '../getByNickname';

export default async function getByNicknameAggregated(requester: Requester, tenant: Tenant, nickname: string): Promise<AggregatedData>
{
    const data = await getByNickname(nickname, tenant.id);

    return aggregate(data);
}
