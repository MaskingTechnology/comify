
import type ImageData from '../../image/data/ImageData';
import downloadImage from '../../image/download/feature';

import { IMAGE_TYPE } from '../definitions/constants';

export default async function generatePortrait(portraitUrl: string): Promise<ImageData>
{
    return downloadImage(IMAGE_TYPE, portraitUrl);
}
