
import { type Identity } from '@theshelf/authentication';

import { type Tenant } from '@comify/common/domain/tenant';

import createCreator from '^/domain/creator/create';

export default async function (tenant: Tenant, identity: Identity): Promise<string>
{
    const portraitUrl = identity.picture !== undefined ? new URL(identity.picture) : undefined;

    return createCreator(tenant, {
        fullName: identity.name,
        nickname: identity.nickname ?? identity.name,
        email: identity.email,
        portraitUrl
    });
}
