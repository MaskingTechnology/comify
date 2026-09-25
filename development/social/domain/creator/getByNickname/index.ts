
import { type Requester } from '@comify/common/security';

import toModel from '../_toModel';
import { type Creator, type Nickname } from '../definitions';

import retrieve from './retrieve';

export default async function (requester: Requester, nickname: Nickname): Promise<Creator>
{
    const record = await retrieve(requester.tenantId, nickname);

    return toModel(record);
}
