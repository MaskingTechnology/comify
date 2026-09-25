
import { type TenantId } from '@comify/common/domain/tenant';
import { type Identifier } from '@comify/common/primitives/identifier';

import retrievePost from '~/post/_retrieveById';

import create from '../_create';
import { Types } from '../definitions';

export default async function (tenantId: TenantId, creatorId: Identifier, postId: Identifier): Promise<void>
{
    const postRecord = await retrievePost(tenantId, postId);

    return create(Types.RATED_POST, creatorId, postRecord.creatorId, postId);
}
