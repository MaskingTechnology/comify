
import ImageData from '../image/data/ImageData';
import generateImage from '../image/generateImage';
import { IMAGE_TYPE } from './data/constants';

export default async function generatePortrait(pictureUrl: string): Promise<ImageData>
{
    return generateImage(pictureUrl, IMAGE_TYPE);
}
