
import type { Requester } from '^/domain/authentication/types';
import createComic from '^/domain/comic/create/feature';

import createReaction from '../create/feature';

export default async function feature(requester: Requester, imageData: string, postId: string | undefined = undefined, reactionId: string | undefined = undefined): Promise<string>
{
    const comicId = await createComic(imageData);

    return createReaction(requester.id, postId, reactionId, comicId);
}
