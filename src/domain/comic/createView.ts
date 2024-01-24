
import retrieveImageView from '../image/retrieveView';

import type ComicData from './ComicData';
import ComicView from './ComicView';

export default async function createView(data: ComicData): Promise<ComicView>
{
    const imageView = await retrieveImageView(data.imageId);

    return new ComicView(data.id, imageView);
}
