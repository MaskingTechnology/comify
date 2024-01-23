
import retrieveImageData from '../image/retrieveData';
import createImageView from '../image/createView';

import ComicData from './ComicData';
import ComicView from './ComicView';

export default async function createView(data: ComicData): Promise<ComicView>
{
    const imageData = await retrieveImageData(data.imageId);
    const imageView = await createImageView(imageData);

    return new ComicView(data.id, imageView);
}
