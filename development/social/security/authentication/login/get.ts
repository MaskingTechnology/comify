
import { type Identity } from '@theshelf/authentication';

import { type Tenant } from '@comify/common/domain/tenant';

import getCreatorId from '^/domain/creator/getIdByEmail';

export default async function (tenant: Tenant, identity: Identity): Promise<string | undefined>
{
    return getCreatorId(tenant, identity.email);
}
