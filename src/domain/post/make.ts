
import Requester from '../authentication/Requester';
import makeComic from '../comic/make';
import create from './data/create';

export default async function make(requester: Requester, comicImageDataUrl: string): Promise<void>
{
    const comic = await makeComic(comicImageDataUrl);

    await create(requester.id, comic.id);
}
