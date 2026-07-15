
import type { Identity } from '@theshelf/authentication';

import type { Tenant } from '@comify/common/domain/tenant';

import getCreatorByEmail from '~/creator/_retrieveByEmail';
import registerCreator from '~/creator/register';

import type { Requester } from '../definitions';

export default async function run(tenant: Tenant, identity: Identity): Promise<Requester>
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
