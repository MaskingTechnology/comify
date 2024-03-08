
import Requester from '../authentication/Requester';
import createComic from '../comic/create';
import removeComic from '../comic/remove';
import increaseCreatorComicCount from '../creator/increaseComicCount';
import createPost from './data/create';
import removePost from './data/remove';

export default async function create(requester: Requester, comicImageDataUrl: string): Promise<void>
{
    let comic, post;

    try
    {
        comic = await createComic(comicImageDataUrl);
        post = await createPost(requester.id, comic.id);

        await increaseCreatorComicCount(requester.id);
    }
    catch (error: unknown)
    {
        const undoComic = comic !== undefined ? removeComic(comic.id) : Promise.resolve();
        const undoPost = post !== undefined ? removePost(post.id) : Promise.resolve();

        await Promise.all([undoComic, undoPost]);

        throw error;
    }
}
