
import { Identity } from '../../integrations/authentication/module';
import retrieveCreatorByEmail from '../creator/data/retrieveByEmail';
import generateCreatorPortrait from '../creator/generatePortrait';
import registerCreator from '../creator/register';
import Requester from './Requester';
import createRequester from './createRequester';

export default async function login(identity: Identity): Promise<Requester>
{
    const existingCreator = await retrieveCreatorByEmail(identity.email);

    if (existingCreator !== undefined)
    {
        return createRequester(existingCreator);
    }

    const portrait = identity.picture !== undefined
        ? await generateCreatorPortrait(identity.picture)
        : undefined;

    const nickname = identity.nickname ?? identity.name;
    const registeredCreator = await registerCreator(identity.email, identity.name, nickname, portrait?.id);

    return createRequester(registeredCreator);
}
