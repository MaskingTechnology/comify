
import { Identity } from '../../integrations/authentication/module';

import registerCreator from '../creator/register';
import retrieveCreatorByEmail from '../creator/data/retrieveByEmail';

import Requester from './Requester';
import createRequester from './createRequester';

export default async function login(identity: Identity): Promise<Requester>
{
    const existingCreator = await retrieveCreatorByEmail(identity.email);

    if (existingCreator !== undefined)
    {
        return createRequester(existingCreator);
    }

    const nickname = identity.nickname ?? identity.name;
    const registeredCreator = await registerCreator(identity.email, identity.name, nickname);

    return createRequester(registeredCreator);
}
