
import logger from '^/integrations/logging';

import type { Requester } from '^/domain/authentication';
import type { Tenant } from '^/domain/tenant';

import cleanNickname from '../cleanNickname';
import update from '../update';
import NicknameAlreadyExists from './NicknameAlreadyExists';
import retrieveByNickname from './retrieveByNickname';


export default async function updateNickname(tenant: Tenant, requester: Requester, nickname: string): Promise<void>
{
    const cleanedNickname = cleanNickname(nickname);

    const data = await retrieveByNickname(tenant.id, cleanedNickname);

    if (data !== undefined)
    {
        logger.debug(`Nickname of creator with id '${requester.id}' could not be updated because nickname '${nickname}' already exists.`);

        throw new NicknameAlreadyExists();
    }

    return update(requester.id, { nickname });
}
