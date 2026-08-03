
import type { TenantId } from '@comify/common/domain/tenant';
import type { Identifier } from '@comify/common/primitives/identifier';

import retrievePost from '~/post/_retrieveById';

import { Types } from '../definitions';
import create from '../_create';

export default async function (tenantId: TenantId, postId: Identifier, parentId?: Identifier): Promise<void>
{
    if (parentId === undefined)
    {
        // Root posts are not reactions

        return;
    }

    const [postRecord, parentRecord] = await Promise.all([
        retrievePost(tenantId, postId),
        retrievePost(tenantId, parentId)
    ]);

    return create(Types.REACTED_TO_POST, postRecord.creatorId, parentRecord.creatorId, postId);
}
