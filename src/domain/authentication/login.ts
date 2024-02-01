
import { Identity } from '../../integrations/authentication/module';

import type CreatorData from '../creator/data/CreatorData';
import generateCreatorNickname from '../creator/generateNickname';
import createCreator from '../creator/data/create';
import retrieveCreatorByEmail from '../creator/data/retrieveByEmail';

export default async function login(identity: Identity): Promise<CreatorData>
{
    const creator = await retrieveCreatorByEmail(identity.email);

    if (creator !== undefined)
    {
        return creator;
    }

    const nickName = await generateCreatorNickname(identity.nickname ?? identity.name);

    return createCreator(identity.email, identity.name, nickName);
}
