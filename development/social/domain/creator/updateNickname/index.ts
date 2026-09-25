
import { type Requester } from '@comify/common/security';

import formatNickname from '../_formatNickname';
import { type Nickname } from '../definitions';

import checkAvailability from './checkAvailability';
import persist from './persist';
import publish from './publish';
import validate from './validate';

export default async function (requester: Requester, nickname: Nickname): Promise<void>
{
    validate(nickname);

    const formattedNickname = formatNickname(nickname);

    await checkAvailability(requester, formattedNickname);

    await persist(requester.principalId, nickname);

    return publish(requester.tenantId, requester.principalId);
}

export { default as NicknameAlreadyExists } from './NicknameAlreadyExists';
