
import { Identity } from '^/integrations/authentication';

import getCreatorByEmail from '^/domain/creator/getByEmail';
import registerCreator from '^/domain/creator/register';

import type { Requester } from '../types';

export default async function login(identity: Identity): Promise<Requester>
{
    const existingCreator = await getCreatorByEmail(identity.email);

    const loggedInCreator = existingCreator ?? await registerCreator(
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
