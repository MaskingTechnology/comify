
import downloadImage from '^/domain/image/download/feature';

import { IMAGE_TYPE } from '../definitions';

export default async function downloadPortrait(portraitUrl: string): Promise<string>
{
    return downloadImage(IMAGE_TYPE, portraitUrl);
}
