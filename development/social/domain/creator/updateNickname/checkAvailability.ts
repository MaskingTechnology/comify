
import database from '@comify/common/integrations/database';
import { type Requester } from '@comify/common/security';

import { RECORD_TYPE, type Record } from '../definitions';
import { logger } from '../integrations';

import NicknameAlreadyExists from './NicknameAlreadyExists';

export default async function (requester: Requester, nickname: string): Promise<void>
{
    const result = await database.readRecord<Record>(RECORD_TYPE, {
        tenantId: { 'EQUALS': requester.tenantId },
        nickname: { 'EQUALS': nickname }
    });

    if (result.found)
    {
        logger.debug(`Nickname of creator with id '${requester.principalId}' could not be updated because nickname '${nickname}' already exists.`);

        throw new NicknameAlreadyExists();
    }
}
