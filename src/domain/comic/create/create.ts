
import createImage from '^/domain/image/create/create';

import { IMAGE_TYPE } from '../definitions';

import createData from './createData';
import insertData from './insertData';
import validateData from './validateData';

export default async function create(imageDataUrl: string, structure: string | undefined = undefined): Promise<string>
{
    const imageId = await createImage(IMAGE_TYPE, imageDataUrl);

    const data = createData(imageId, structure);

    validateData(data);

    return insertData(data);
}
