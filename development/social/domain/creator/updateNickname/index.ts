
import { type Requester } from '@comify/common/security';

import type { Nickname } from '../definitions';
import { logger } from '../integrations';
import formatNickname from '../_formatNickname';

import validate from './validate';
import retrieve from './retrieve';
import persist from './persist';
import publish from './publish';
import NicknameAlreadyExists from './NicknameAlreadyExists';

export default async function (requester: Requester, nickname: Nickname): Promise<void>
{
    validate(nickname);

    const formattedNickname = formatNickname(nickname);

    const record = await retrieve(requester.tenantId, formattedNickname);

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
