
import downloadImage, { type Result as ImageData } from '../../image/download/feature';

import { IMAGE_TYPE } from '../definitions/constants';

export default async function generatePortrait(portraitUrl: string): Promise<ImageData>
{
    return downloadImage(IMAGE_TYPE, portraitUrl);
}
