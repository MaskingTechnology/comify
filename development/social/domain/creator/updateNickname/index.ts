
import logger from '@comify/common/integrations/logging';

import { type Requester } from '@comify/common/security';

import cleanNickname from '../_cleanNickname';
import persist from './persist';

import NicknameAlreadyExists from './NicknameAlreadyExists';
import retrieve from './retrieve';

export default async function updateNickname(requester: Requester, nickname: string): Promise<void>
{
    const cleanedNickname = cleanNickname(nickname);

    const record = await retrieve(requester.tenantId, cleanedNickname);

    if (record !== undefined)
    {
        logger.debug(`Nickname of creator with id '${requester.principalId}' could not be updated because nickname '${nickname}' already exists.`);

        throw new NicknameAlreadyExists();
    }

    return persist(requester.principalId, nickname);
}

export { default as NicknameAlreadyExists } from './NicknameAlreadyExists';
