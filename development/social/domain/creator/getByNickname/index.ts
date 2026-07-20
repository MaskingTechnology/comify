
import { type Requester } from '@comify/common/security';

import type { Creator } from '../definitions';
import toModel from '../_toModel';
import retrieveByNickname from '../_retrieveByNickname';

export default async function getByNickname(requester: Requester, nickname: string): Promise<Creator>
{
    const record = await retrieveByNickname(requester.tenantId, nickname);

    return toModel(record);
}
