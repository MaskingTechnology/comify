
import { Identity } from '../../integrations/authentication/module';

import CreatorData from '../creator/CreatorData';
import createCreator from '../creator/create';
import findCreatorByEmail from '../creator/findByEmail';

export default async function login(identity: Identity): Promise<CreatorData>
{
    const creator = await findCreatorByEmail(identity.email);

    if (creator !== undefined)
    {
        return creator;
    }

    return createCreator(identity.email, identity.name, identity.nickname);
}
