
import logger from '^/integrations/logging';

import { Requester } from '^/domain/authentication';
import createComic from '^/domain/comic/create';

import createPost from '../create';
import erasePost from '../erase';

import publish from './publish';

export default async function add(requester: Requester, comicImageDataUrl: string): Promise<void>
{
    let postId;

    try
    {
        const comicId = await createComic(comicImageDataUrl);

        postId = await createPost(requester.id, comicId);

        publish(requester.id, postId);
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
