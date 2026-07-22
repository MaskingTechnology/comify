
import { type Requester } from '@comify/common/security';
import logger from '@comify/common/integrations/logging';

import type { Creator } from '../definitions';
import toModel from '../_toModel';

import retrieve from './retrieve';
import NicknameNotFound from './NicknameNotFound';

export default async function run(requester: Requester, nickname: string): Promise<Creator>
{
    const record = await retrieve(requester.tenantId, nickname);

    if (record === undefined)
    {
        logger.debug(`Creator for tenant '${requester.tenantId}' with nickname '${nickname}' could not be found.`);

        throw new NicknameNotFound();
    }

    return toModel(record);
}
