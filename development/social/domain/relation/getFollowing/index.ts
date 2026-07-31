
import { type Range } from '@comify/common/primitives/range';
import validateRange from '@comify/common/primitives/range/validate';
import { type Requester } from '@comify/common/security';

import retrieveByFollower from '../_retrieveFollowing';
import toModels from '../_toModels';
import { type Relation } from '../definitions';

export default async function (requester: Requester, followerId: string, range: Range): Promise<Relation[]>
{
    validateRange(range);

    const records = await retrieveByFollower(requester.principalId, followerId, range.limit, range.offset);

    const relations = await toModels(requester.tenantId, records);

    return relations.values().toArray();
}
