
import { publish as publishRelationEstablished } from '@comify/common/domain/relation/established';
import { type Requester } from '@comify/common/security';

import { CONTEXT_ID } from '~/definitions';

import { type RelationKey } from '../definitions';

export default async function (requester: Requester, key: RelationKey): Promise<void>
{
    return publishRelationEstablished({
        contextId: CONTEXT_ID,
        principalId: requester.principalId,
        tenantId: requester.tenantId,
        followerId: key.followerId,
        followingId: key.followingId
    });
}
