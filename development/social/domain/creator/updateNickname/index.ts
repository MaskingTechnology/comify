
import { type Requester } from '@comify/common/security';

import formatNickname from '../_formatNickname';
import { type Nickname } from '../definitions';
import { logger } from '../integrations';

import NicknameAlreadyExists from './NicknameAlreadyExists';
import persist from './persist';
import publish from './publish';
import retrieve from './retrieve';
import validate from './validate';

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
