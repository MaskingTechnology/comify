
import createImage from '../image/create';
import removeImage from '../image/remove';
import ComicData from './data/ComicData';
import createData from './data/create';
import { IMAGE_TYPE } from './definitions/constants.js';

export default async function create(imageDataUrl: string, structure?: string): Promise<ComicData>
{
    let image;

    try
    {
        image = await createImage(IMAGE_TYPE, imageDataUrl);

        const data = await createData(image.id, structure);

        return data;
    }
    catch (error: unknown)
    {
        if (image !== undefined)
        {
            await removeImage(image.id);
        }

        throw error;
    }
}
