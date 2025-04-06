
import type { Identity } from '^/integrations/authentication';

import getCreatorByEmail from '^/domain/creator/getByEmail';
import registerCreator from '^/domain/creator/register';

import type { Requester } from '../types';

export default async function login(identity: Identity, tenantId: string): Promise<Requester>
{
    // get tenantId from DB using the url string value

    const existingCreator = await getCreatorByEmail(identity.email, tenantId);

    const loggedInCreator = existingCreator ?? await registerCreator(
        identity.name,
        identity.nickname ?? identity.name,
        identity.email,
        tenantId,
        identity.picture
    );

    return {
        id: loggedInCreator.id,
        fullName: loggedInCreator.fullName,
        nickname: loggedInCreator.nickname,
        tenantId,
    };
}
