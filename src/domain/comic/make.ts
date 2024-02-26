
import makeImage from '../image/make';
import ComicData from './data/ComicData';
import { IMAGE_TYPE } from './data/constants.js';
import create from './data/create';

export default async function make(imageDataUrl: string, structure?: string): Promise<ComicData>
{
    const image = await makeImage(IMAGE_TYPE, imageDataUrl);

    return create(image.id, structure);
}
