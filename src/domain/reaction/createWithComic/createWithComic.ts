
import { Requester } from '^/domain/authentication';
import createComic from '^/domain/comic/create';

import createReaction from '../create';

export default async function createWithComic(requester: Requester, imageData: string, postId: string | undefined = undefined, reactionId: string | undefined = undefined): Promise<string>
{
    const comicId = await createComic(imageData);

    return createReaction(requester.id, postId, reactionId, comicId);
}
