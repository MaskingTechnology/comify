
import { type Requester } from '@comify/common/security';

import { logger } from '../integrations';
import cleanNickname from '../_cleanNickname';

import retrieve from './retrieve';
import persist from './persist';
import publish from './publish';
import NicknameAlreadyExists from './NicknameAlreadyExists';

export default async function run(requester: Requester, nickname: string): Promise<void>
{
    const cleanedNickname = cleanNickname(nickname);

    const record = await retrieve(requester.tenantId, cleanedNickname);

    if (record !== undefined)
    {
        logger.debug(`Nickname of creator with id '${requester.principalId}' could not be updated because nickname '${nickname}' already exists.`);

        throw new NicknameAlreadyExists();
    }

    const succeeded = await persist(requester.principalId, nickname);

    if (succeeded === false)
    {
        logger.warn(`Nickname for creator with id '${requester.principalId}' has not been updated.`);
    }

    return publish(requester.tenantId, requester.principalId);
}

export { default as NicknameAlreadyExists } from './NicknameAlreadyExists';
