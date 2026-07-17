
import type { Requester } from '~/authentication';
import type { Tenant } from '@comify/common/domain/tenant';

import type { Creator } from '../definitions';
import toModel from '../_toModel';
import retrieveByNickname from '../_retrieveByNickname';

export default async function getByNickname(tenant: Tenant, requester: Requester, nickname: string): Promise<Creator>
{
    const record = await retrieveByNickname(tenant.id, nickname);

    return toModel(record);
}
