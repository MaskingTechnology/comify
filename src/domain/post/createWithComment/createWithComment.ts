
import type { Requester } from '^/domain/authentication';
import createComment from '^/domain/comment/create';

import createPost from '../create';

export default async function createWithComment(requester: Requester, message: string, parentId: string | undefined = undefined): Promise<string>
{
    const commentId = await createComment(message);

    return createPost(requester.id, undefined, commentId, parentId);
}
