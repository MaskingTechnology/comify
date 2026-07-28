
import { type Identity } from '@theshelf/authentication';

import { type Tenant } from '@comify/common/domain/tenant';

import createCreator from '^/domain/creator/create';

export default async function register(tenant: Tenant, identity: Identity): Promise<string>
{
    return createCreator(tenant, {
        fullName: identity.name,
        nickname: identity.nickname ?? identity.name,
        email: identity.email,
        portraitUrl: identity.picture
    });
}
