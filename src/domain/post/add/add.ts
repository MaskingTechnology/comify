
import logger from '^/integrations/logging/module';

import { Requester } from '^/domain/authentication';
import createComic from '^/domain/comic/create';
import updateCreatorPostCount from '^/domain/creator/updatePostCount';

import createPost from '../create';
import erasePost from '../erase';

export default async function add(requester: Requester, comicImageDataUrl: string): Promise<void>
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
