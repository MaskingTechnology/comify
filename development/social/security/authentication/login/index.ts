
import { type Identity } from '@theshelf/authentication';

import { type Tenant } from '@comify/common/domain/tenant';
import { type Requester } from '@comify/common/security';

import get from './get';
import register from './register';

export default async function (tenant: Tenant, identity: Identity): Promise<Requester>
{
    const principalId = await get(tenant, identity)
        ?? await register(tenant, identity);

    const tenantId = tenant.id;

    return { principalId, tenantId };
}
