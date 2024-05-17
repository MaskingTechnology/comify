
import { Identity } from '^/integrations/authentication/module';

import registerCreator from '../creator/register';
import retrieveCreatorByEmail from '../creator/repository/retrieveByEmail';
import type Requester from './Requester';
import createRequester from './createRequester';

export default async function login(identity: Identity): Promise<Requester>
{
    const existingCreator = await retrieveCreatorByEmail(identity.email);

    const loggedInCreator = existingCreator ?? await registerCreator(
        identity.name,
        identity.nickname ?? identity.name,
        identity.email,
        identity.picture
    );

    return createRequester(loggedInCreator);
}
