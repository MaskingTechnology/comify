
import logger from '^/integrations/logging/module';

import type { Requester } from '^/domain/authentication/types';
import createComic from '^/domain/comic/create/feature';
import eraseComic from '^/domain/comic/erase/feature';
import updateCreatorPostCount from '^/domain/creator/updatePostCount/feature';

import createData from './createData';
import erasePost from './eraseData';
import insertData from './insertData';

export default async function feature(requester: Requester, comicImageDataUrl: string): Promise<void>
{
    let comicId, postId;

    try
    {
        comicId = await createComic(comicImageDataUrl);

        const data = createData(requester.id, comicId);

        postId = await insertData(data);

        await updateCreatorPostCount(requester.id, 'increase');
    }
    catch (error: unknown)
    {
        logger.logError('Failed to create post', error);

        const undoComic = comicId !== undefined ? eraseComic(comicId) : Promise.resolve();
        const undoPost = postId !== undefined ? erasePost(postId) : Promise.resolve();

        await Promise.all([undoComic, undoPost]);

        throw error;
    }
}
