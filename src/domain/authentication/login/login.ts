
import type { Identity } from '^/integrations/authentication';

import getCreatorByEmail from '^/domain/creator/getByEmail';
import registerCreator from '^/domain/creator/register';
import getByHostname from '^/domain/host/getByName';

import type { Requester } from '../types';

export default async function login(identity: Identity, hostname: string): Promise<Requester>
{
    const tenant = await getByHostname(hostname);
    const tenantId = tenant?.id;

    const existingCreator = await getCreatorByEmail(identity.email, tenantId);

    const loggedInCreator = existingCreator ?? await registerCreator(
        identity.name,
        identity.nickname ?? identity.name,
        identity.email,
        identity.picture,
        tenantId
    );

    return {
        id: loggedInCreator.id,
        fullName: loggedInCreator.fullName,
        nickname: loggedInCreator.nickname,
        tenantId,
    };
}
