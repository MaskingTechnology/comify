
import retrieveImageView from '../image/get';

import type ComicData from './data/ComicData';
import ComicView from './ComicView';

export default async function createView(data: ComicData): Promise<ComicView>
{
    const imageView = await retrieveImageView(data.imageId);

    return new ComicView(data.id, imageView);
}
