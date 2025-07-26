
import type { Requester } from '^/domain/authentication';
import createComment from '^/domain/comment/create';
import type { Tenant } from '^/domain/tenant';

import createPost from '../create';

export default async function createWithComment(tenant: Tenant, requester: Requester, message: string, parentId: string | undefined = undefined): Promise<string>
{
    const commentId = await createComment(message);

    return createPost(tenant.id, requester.id, undefined, commentId, parentId);
}
