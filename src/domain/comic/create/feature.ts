
import createImage from '^/domain/image/create/feature';

import { IMAGE_TYPE } from '../definitions';

import createData from './createData';
import insert from './insertData';
import validateData from './validateData';

export default async function feature(imageDataUrl: string, structure?: string): Promise<string>
{
    const imageId = await createImage(IMAGE_TYPE, imageDataUrl);

    const data = createData(imageId, structure);

    validateData(data);

    return insert(data);
}
