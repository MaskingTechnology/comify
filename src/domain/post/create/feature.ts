
import type Requester from '^/domain/authentication/Requester';
import createComic from '^/domain/comic/create/feature';
import eraseComic from '^/domain/comic/erase/feature';
import increaseCreatorPostCount from '^/domain/creator/increasePostCount';

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

        await increaseCreatorPostCount(requester.id);
    }
    catch (error: unknown)
    {
        const undoComic = comicId !== undefined ? eraseComic(comicId) : Promise.resolve();
        const undoPost = postId !== undefined ? erasePost(postId) : Promise.resolve();

        await Promise.all([undoComic, undoPost]);

        throw error;
    }
}