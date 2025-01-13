
import { Requester } from '^/domain/authentication';
import createComment from '^/domain/comment/create';

import createReaction from '../create';

export default async function createWithComment(requester: Requester, message: string, postId: string | undefined = undefined, reactionId: string | undefined = undefined): Promise<string>
{
    const commentId = await createComment(message);

    return createReaction(requester.id, postId, reactionId, undefined, commentId);
}
