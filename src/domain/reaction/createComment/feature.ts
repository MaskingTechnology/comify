
import type { Requester } from '^/domain/authentication/types';
import createComment from '^/domain/comment/create/feature';
import eraseComment from '^/domain/comment/erase/feature';

import createReaction from '../create/feature';

export default async function feature(requester: Requester, postId: string, message: string): Promise<string>
{
    let commentId;

    try
    {
        commentId = await createComment(message);

        return await createReaction(requester.id, postId, undefined, commentId);
    }
    catch (error: unknown)
    {
        if (commentId !== undefined)
        {
            await eraseComment(commentId);
        }

        throw error;
    }
}
