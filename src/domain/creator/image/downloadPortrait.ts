
import downloadImage from '../../image/download/feature';

import { IMAGE_TYPE } from '../definitions/constants';

export default async function generatePortrait(portraitUrl: string): Promise<string>
{
    return downloadImage(IMAGE_TYPE, portraitUrl);
}
