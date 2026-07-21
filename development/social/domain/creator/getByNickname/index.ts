
import { type Requester } from '@comify/common/security';

import type { Creator } from '../definitions';
import toModel from '../_toModel';

import retrieve from './retrieve';

export default async function run(requester: Requester, nickname: string): Promise<Creator>
{
    const record = await retrieve(requester.tenantId, nickname);

    return toModel(record);
}
