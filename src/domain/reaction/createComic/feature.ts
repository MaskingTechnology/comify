
import type { Requester } from '^/domain/authentication/types';
import createComic from '^/domain/comic/create/feature';
import eraseComic from '^/domain/comic/erase/feature';

import createReaction from '../create/feature';

export default async function feature(requester: Requester, postId: string, imageData: string): Promise<string>
{
    let comicId;

    try
    {
        comicId = await createComic(imageData);

        return await createReaction(requester.id, postId, comicId);
    }
    catch (error: unknown)
    {
        if (comicId !== undefined)
        {
            await eraseComic(comicId);
        }

        throw error;
    }
}
