
import downloadImage from '^/domain/image/download';

import { IMAGE_TYPE } from '../definitions';

export default async function downloadPortrait(portraitUrl: string): Promise<string>
{
    return downloadImage(IMAGE_TYPE, portraitUrl);
}
