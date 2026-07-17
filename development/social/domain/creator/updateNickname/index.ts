
import logger from '@comify/common/integrations/logging';
import type { Tenant } from '@comify/common/domain/tenant';

import type { Requester } from '~/authentication';

import cleanNickname from '../_cleanNickname';
import update from '../_update';

import NicknameAlreadyExists from './NicknameAlreadyExists';
import retrieve from './retrieve';

export default async function updateNickname(tenant: Tenant, requester: Requester, nickname: string): Promise<void>
{
    const cleanedNickname = cleanNickname(nickname);

    const record = await retrieve(tenant.id, cleanedNickname);

    if (record !== undefined)
    {
        logger.debug(`Nickname of creator with id '${requester.id}' could not be updated because nickname '${nickname}' already exists.`);

        throw new NicknameAlreadyExists();
    }

    return update(requester.id, { nickname });
}

export { default as NicknameAlreadyExists } from './NicknameAlreadyExists';
