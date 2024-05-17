
import type Requester from '../authentication/Requester';
import createComic from '../comic/create';
import eraseComic from '../comic/erase';
import increaseCreatorPostCount from '../creator/increasePostCount';
import createPost from './data/createData';
import erasePost from './repository/erase';
import insert from './repository/insert';

export default async function create(requester: Requester, comicImageDataUrl: string): Promise<void>
{
    let comic, postId;

    try
    {
        comic = await createComic(comicImageDataUrl);

        const data = createPost(requester.id, comic.id);

        postId = await insert(data);

        await increaseCreatorPostCount(requester.id);
    }
    catch (error: unknown)
    {
        const undoComic = comic !== undefined ? eraseComic(comic.id) : Promise.resolve();
        const undoPost = postId !== undefined ? erasePost(postId) : Promise.resolve();

        await Promise.all([undoComic, undoPost]);

        throw error;
    }
}
