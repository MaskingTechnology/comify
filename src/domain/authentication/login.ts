
import { Identity } from '^/integrations/authentication/module';

import getCreatorByEmail from '^/domain/creator/getByEmail/feature';
import registerCreator from '^/domain/creator/register/feature';

import type Requester from './Requester';
import createRequester from './createRequester';

export default async function login(identity: Identity): Promise<Requester>
{
    const existingCreator = await getCreatorByEmail(identity.email);

    const loggedInCreator = existingCreator ?? await registerCreator(
        identity.name,
        identity.nickname ?? identity.name,
        identity.email,
        identity.picture
    );

    return createRequester(loggedInCreator);
}
