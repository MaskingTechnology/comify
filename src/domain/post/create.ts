
import type Requester from '../authentication/Requester';
import createComic from '../comic/create/feature';
import eraseComic from '../comic/erase/feature';
import increaseCreatorPostCount from '../creator/increasePostCount';
import createPost from './data/create';
import erasePost from './data/erase';

export default async function create(requester: Requester, comicImageDataUrl: string): Promise<void>
{
    let comic, post;

    try
    {
        comic = await createComic(comicImageDataUrl);
        post = await createPost(requester.id, comic.id);

        await increaseCreatorPostCount(requester.id);
    }
    catch (error: unknown)
    {
        const undoComic = comic !== undefined ? eraseComic(comic) : Promise.resolve();
        const undoPost = post !== undefined ? erasePost(post.id) : Promise.resolve();

        await Promise.all([undoComic, undoPost]);

        throw error;
    }
}
