
import type { Requester } from '~/authentication';
import type { Tenant } from '~/tenant';

import type { AggregatedData } from '../aggregate';
import aggregate from '../aggregate';
import getByNickname from '../getByNickname';

export default async function getByNicknameAggregated(tenant: Tenant, requester: Requester, nickname: string): Promise<AggregatedData>
{
    const data = await getByNickname(tenant.id, nickname);

    return aggregate(data);
}
