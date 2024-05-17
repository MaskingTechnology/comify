
import createImage from '^/domain/image/create';
import eraseImage from '^/domain/image/erase';

import type ComicData from './data/ComicData';
import createData from './data/createData';
import { IMAGE_TYPE } from './definitions/constants.js';
import insert from './repository/insert';

export default async function create(imageDataUrl: string, structure?: string): Promise<ComicData>
{
    let image;

    try
    {
        image = await createImage(IMAGE_TYPE, imageDataUrl);

        const data = createData(image.id, structure);

        await insert(data);

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
