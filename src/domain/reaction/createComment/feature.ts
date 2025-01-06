
import type { Requester } from '^/domain/authentication/types';
import createComment from '^/domain/comment/create/feature';

import createReaction from '../create/feature';

export default async function feature(requester: Requester, message: string, postId: string | undefined = undefined, reactionId: string | undefined = undefined): Promise<string>
{
    const commentId = await createComment(message);

    return createReaction(requester.id, postId, reactionId, undefined, commentId);
}
