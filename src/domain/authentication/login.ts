
import { Identity } from '../../integrations/authentication/module';

import CreatorData from '../creator/data/CreatorData';
import generateCreatorNickname from '../creator/generateNickname';
import createCreator from '../creator/data/create';
import retrieveCreatorByEmail from '../creator/data/retrieveByEmail';
import generateCreatorPortrait from '../creator/generatePortrait';

export default async function login(identity: Identity): Promise<CreatorData>
{
    const creator = await retrieveCreatorByEmail(identity.email);

    if (creator !== undefined)
    {
        return creator;
    }

    const portrait = identity.picture !== undefined
        ? await generateCreatorPortrait(identity.picture)
        : undefined;

    const nickName = await generateCreatorNickname(identity.nickname ?? identity.name);

    return createCreator(identity.email, identity.name, nickName, portrait?.id);
}
