
import type { Requester } from '^/domain/authentication/types';
import createComic from '^/domain/comic/create/feature';

import createReaction from '../create/feature';

export default async function feature(requester: Requester, postId: string, imageData: string): Promise<string>
{
    const comicId = await createComic(imageData);

    return await createReaction(requester.id, postId, comicId);
}
