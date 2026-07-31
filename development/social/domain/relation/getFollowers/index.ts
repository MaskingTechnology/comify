
import { type Range } from '@comify/common/primitives/range';
import validateRange from '@comify/common/primitives/range/validate';
import { type Requester } from '@comify/common/security';

import type { Relation } from '../definitions';
import translateToRequester from '../_translateToRequester';
import toModels from '../_toModels';

import retrieve from './retrieve';

export default async function (requester: Requester, followingId: string, range: Range): Promise<Relation[]>
{
    validateRange(range);

    const records = await retrieve(followingId, range.limit, range.offset);

    const translated = await translateToRequester(requester.principalId, 'follower', records);

    const relations = await toModels(requester.tenantId, translated);

    return relations.values().toArray();
}
