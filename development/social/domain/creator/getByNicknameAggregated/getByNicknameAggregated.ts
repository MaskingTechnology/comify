
import type { Requester } from '^/domain/authentication';
import type { Tenant } from '^/domain/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getByNickname from '../getByNickname';

export default async function getByNicknameAggregated(tenant: Tenant, requester: Requester, nickname: string): Promise<AggregatedData>
{
    const data = await getByNickname(tenant.id, nickname);

    return aggregate(data);
}
