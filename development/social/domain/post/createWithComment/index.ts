
import type { Tenant } from '@comify/common/domain/tenant';

import type { Requester } from '~/authentication';
import createComment from '~/comment/create';

import createPost from '../_create';

export default async function run(tenant: Tenant, requester: Requester, message: string, parentId: string | undefined = undefined): Promise<string>
{
    const commentId = await createComment(message);

    return createPost(tenant.id, requester.id, undefined, commentId, parentId);
}
