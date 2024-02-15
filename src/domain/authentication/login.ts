
import { Identity } from '../../integrations/authentication/module';
import retrieveCreatorByEmail from '../creator/data/retrieveByEmail';
import registerCreator from '../creator/register';
import Requester from './Requester';
import createRequester from './createRequester';

export default async function login(identity: Identity): Promise<Requester>
{
    const existingCreator = await retrieveCreatorByEmail(identity.email);

    const loggedInCreator = existingCreator ?? await registerCreator(
        identity.email,
        identity.name,
        identity.nickname ?? identity.name,
        identity.picture
    );

    return createRequester(loggedInCreator);
}
