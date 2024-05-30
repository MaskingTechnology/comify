
import type Requester from '^/domain/authentication/Requester';
import createComic from '^/domain/comic/create/feature';

import createReaction from '../create/feature';

export default async function feature(requester: Requester, postId: string, imageData: string): Promise<string>
{
    const comicId = await createComic(imageData);

    return createReaction(requester.id, postId, comicId);
}
