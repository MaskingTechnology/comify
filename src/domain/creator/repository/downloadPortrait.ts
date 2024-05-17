
import type ImageData from '^/domain/image/data/ImageData';
import downloadImage from '^/domain/image/download';

import { IMAGE_TYPE } from '../definitions/constants';

export default async function generatePortrait(portraitUrl: string): Promise<ImageData>
{
    return downloadImage(IMAGE_TYPE, portraitUrl);
}
