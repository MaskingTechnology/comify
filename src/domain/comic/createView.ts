
import retrieveImage from '../image/retrieve';
import createImageView from '../image/createView';

import ComicData from './ComicData';
import ComicView from './ComicView';

export default async function createView(data: ComicData): Promise<ComicView>
{
    const image = await retrieveImage(data.imageId);
    const imageView = await createImageView(image);

    return new ComicView(data.id, imageView);
}
