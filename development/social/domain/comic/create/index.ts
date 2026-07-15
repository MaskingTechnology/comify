
import createImage from '~/image/create';

import { IMAGE_TYPE } from '../definitions';

import createData from './createData';
import insertData from './insertData';
import validateData from './validateData';

export default async function run(imageDataUrl: string, structure: string | undefined = undefined): Promise<string>
{
    const imageId = await createImage(IMAGE_TYPE, imageDataUrl);

    const data = createData(imageId, structure);

    validateData(data);

    return insertData(data);
}

export { default as InvalidComic } from './InvalidComic';
