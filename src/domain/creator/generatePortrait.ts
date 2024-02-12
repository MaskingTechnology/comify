
import checkImage from '../image/check';
import ImageData from '../image/data/ImageData';
import createImage from '../image/data/create';
import downloadPicture from '../image/download';
import checkImageInFs from '../image/files/check';
import generateStorageKey from '../image/files/generate';
import saveImage from '../image/save';

import { IMAGE_TYPE } from './data/constants';

export default async function generatePortrait(pictureUrl: string): Promise<ImageData>
{
    const imageData = await checkImage(pictureUrl);

    const imageBuffer = await downloadPicture(pictureUrl);

    const storageKey = generateStorageKey(pictureUrl, imageData.mimeType, IMAGE_TYPE);

    if (await checkImageInFs(storageKey))
    {

        return createImage(storageKey, imageData.fileName, imageData.mimeType, imageData.size);
    }

    return saveImage(imageBuffer, storageKey, imageData.fileName, imageData.mimeType, imageData.size);
}
