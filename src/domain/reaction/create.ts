
import Requester from '../authentication/Requester';

import createComicReaction from './createComicReaction';
import createCommentReaction from './createCommentReaction';

export default async function create(requester: Requester, postId: string, message: string | undefined = undefined, imageData: string | undefined = undefined): Promise<void>
{
    if (message !== undefined)
    {
        return createCommentReaction(requester, postId, message);
    }

    if (imageData !== undefined)
    {
        return createComicReaction(requester, postId, imageData);
    }
}
