
import logger from '^/integrations/logging/module';

import type { Requester } from '^/domain/authentication/types';
import createComic from '^/domain/comic/create/feature';
import updateCreatorPostCount from '^/domain/creator/updatePostCount/feature';

import createPost from '../create/feature';
import erasePost from '../erase/feature';

export default async function feature(requester: Requester, comicImageDataUrl: string): Promise<void>
{
    let postId;

    try
    {
        const comicId = await createComic(comicImageDataUrl);

        postId = await createPost(requester.id, comicId);

        await updateCreatorPostCount(requester.id, 'increase');
    }
    catch (error: unknown)
    {
        logger.logError('Failed to create post', error);

        if (postId !== undefined)
        {
            await erasePost(postId);
        }

        throw error;
    }
}
