
import { Identity } from '../../integrations/authentication/module';

import Creator from '../creator/Creator';
import findByEmail from '../creator/findByEmail';
import createCreator from '../creator/createCreator';

export default async function login(identity: Identity): Promise<Creator>
{
    const creator = await findByEmail(identity.email);

    return creator === undefined
        ? createCreator(identity.email, identity.name, identity.nickname, identity.picture)
        : creator;
}
