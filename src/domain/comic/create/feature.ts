
import createImage from '^/domain/image/create/feature';
import eraseImage from '^/domain/image/erase/feature';

import { IMAGE_TYPE } from '../definitions';
import insert, { type Data as Result } from './insertData';

export default async function feature(imageDataUrl: string, structure?: string): Promise<Result>
{
    let image;

    try
    {
        image = await createImage(IMAGE_TYPE, imageDataUrl);

        return insert(image.id, structure);
    }
    catch (error: unknown)
    {
        if (image !== undefined)
        {
            await eraseImage(image.id);
        }

        throw error;
    }
}
