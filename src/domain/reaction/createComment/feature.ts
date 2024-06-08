
import type { Requester } from '^/domain/authentication/types';
import createComment from '^/domain/comment/create/feature';

import createReaction from '../create/feature';

export default async function feature(requester: Requester, postId: string, message: string): Promise<string>
{
    const commentId = await createComment(message);

    return await createReaction(requester.id, postId, undefined, commentId);
}
