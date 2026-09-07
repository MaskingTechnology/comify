
import { type Requester } from '@comify/common/security';

import toModel from '../_toModel';
import { type Creator, type Nickname } from '../definitions';
import { logger } from '../integrations';

import NicknameNotFound from './NicknameNotFound';
import retrieve from './retrieve';

export default async function (requester: Requester, nickname: Nickname): Promise<Creator>
{
    const record = await retrieve(requester.tenantId, nickname);

    if (record === undefined)
    {
        logger.debug(`Creator for tenant '${requester.tenantId}' with nickname '${nickname}' could not be found.`);

        throw new NicknameNotFound();
    }

    return toModel(record);
}
