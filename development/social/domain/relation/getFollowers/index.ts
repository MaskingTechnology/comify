
import { type Requester } from '@comify/common/security';
import type { Range } from '~/common/validateRange';
import validateRange from '~/common/validateRange';

import type { Relation } from '../definitions';
import translateToRequester from '../_translateToRequester';
import toModels from '../_toModels';

import retrieve from './retrieve';

export default async function run(requester: Requester, followingId: string, range: Range): Promise<Relation[]>
{
    validateRange(range);

    const records = await retrieve(followingId, range.limit, range.offset);

    const translated = await translateToRequester(requester.principalId, 'follower', records);

    const relations = await toModels(requester.tenantId, records);

    return [...relations.values()];
}
