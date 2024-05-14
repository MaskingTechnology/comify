
import createImage from '../image/create';
import eraseImage from '../image/erase';
import type ComicData from './data/ComicData';
import createData from './data/create';
import { IMAGE_TYPE } from './definitions/constants.js';

export default async function create(imageDataUrl: string, structure?: string): Promise<ComicData>
{
    let image, data;

    try
    {
        image = await createImage(IMAGE_TYPE, imageDataUrl);
        data = await createData(image.id, structure);

        return data;
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
