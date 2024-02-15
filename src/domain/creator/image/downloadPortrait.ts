
import type ImageData from '../../image/data/ImageData';
import downloadImage from '../../image/download';

import { IMAGE_TYPE } from '../data/constants';

export default async function generatePortrait(portraitUrl: string): Promise<ImageData>
{
    return downloadImage(IMAGE_TYPE, portraitUrl);
}
