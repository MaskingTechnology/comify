
import createImage from '^/domain/image/create/feature';
import eraseImage from '^/domain/image/erase/feature';

import { IMAGE_TYPE } from '../definitions';

import createData from './createData';
import insert from './insertData';

export default async function feature(imageDataUrl: string, structure?: string): Promise<string>
{
    let imageId;

    try
    {
        imageId = await createImage(IMAGE_TYPE, imageDataUrl);

        const data = createData(imageId, structure);

        return insert(data);
    }
    catch (error: unknown)
    {
        if (imageId !== undefined)
        {
            await eraseImage(imageId);
        }

        throw error;
    }
}
