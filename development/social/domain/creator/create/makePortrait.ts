
import downloadImage from '~/image/download';

import { IMAGE_TYPE } from '../definitions';

export default async function (portraitUrl?: URL): Promise<string | undefined>
{
    if (portraitUrl === undefined)
    {
        return undefined;
    }

    return downloadImage(IMAGE_TYPE, portraitUrl);
}
