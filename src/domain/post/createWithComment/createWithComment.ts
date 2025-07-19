
import type { Requester } from '^/domain/authentication';
import createComment from '^/domain/comment/create';
import type { Tenant } from '^/domain/tenant';

import createPost from '../create';

export default async function createWithComment(requester: Requester, tenant: Tenant, message: string, parentId: string | undefined = undefined): Promise<string>
{
    const commentId = await createComment(message);

    return createPost(requester.id, tenant.id, undefined, commentId, parentId);
}
