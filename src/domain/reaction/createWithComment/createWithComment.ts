
import { Requester } from '^/domain/authentication';
import createComment from '^/domain/comment/create';

import createReaction from '../create';

export default async function createWithComment(requester: Requester, postId: string, message: string): Promise<string>
{
    const commentId = await createComment(message);

    return createReaction(requester.id, postId, undefined, commentId);
}
