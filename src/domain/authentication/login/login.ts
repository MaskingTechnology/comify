
import type { Identity } from '^/integrations/authentication';

import getCreatorByEmail from '^/domain/creator/getByEmail';
import registerCreator from '^/domain/creator/register';
import type { Tenant } from '^/domain/tenant';

import type { Requester } from '../types';

export default async function login(tenant: Tenant, identity: Identity): Promise<Requester>
{
    const existingCreator = await getCreatorByEmail(tenant.id, identity.email);

    const loggedInCreator = existingCreator ?? await registerCreator(
        tenant.id,
        identity.name,
        identity.nickname ?? identity.name,
        identity.email,
        identity.picture
    );

    return {
        id: loggedInCreator.id,
        fullName: loggedInCreator.fullName,
        nickname: loggedInCreator.nickname
    };
}
