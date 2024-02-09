
import ImageData from '../image/data/ImageData';
import download from '../image/download';
import { IMAGE_TYPE } from './data/constants';

export default async function generatePortrait(pictureUrl: string): Promise<ImageData>
{
    return download(pictureUrl, IMAGE_TYPE);
}
