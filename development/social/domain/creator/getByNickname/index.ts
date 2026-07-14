
import type { Requester } from '~/authentication';
import type { Tenant } from '@comify/common/domain/tenant';

import type { Creator } from '../definitions';
import aggregate from '../_toModel';
import retrieveByNickname from '../_retrieveByNickname';

export default async function getByNicknameAggregated(tenant: Tenant, requester: Requester, nickname: string): Promise<Creator>
{
    const data = await retrieveByNickname(tenant.id, nickname);

    return aggregate(data);
}
