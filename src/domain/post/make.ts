
import Requester from '../authentication/Requester';
import makeComic from '../comic/make';
import increaseComicCount from '../creator/increaseComicCount';
import create from './data/create';

export default async function make(requester: Requester, comicImageDataUrl: string): Promise<void>
{
    const comic = await makeComic(comicImageDataUrl);

    await create(requester.id, comic.id);
    await increaseComicCount(requester.id);
}
