
import type { Identity } from '@theshelf/authentication';

import getCreatorByEmail from '~/creator/getByEmail';
import registerCreator from '~/creator/register';
import type { Tenant } from '~/tenant';

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
