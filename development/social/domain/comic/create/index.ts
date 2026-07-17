
import createImage from '~/image/create';

import { IMAGE_TYPE } from '../definitions';

import createRecord from './createRecord';
import persist from './persist';
import validate from './validate';

export default async function run(imageDataUrl: string, structure: string | undefined = undefined): Promise<string>
{
    const imageId = await createImage(IMAGE_TYPE, imageDataUrl);

    const record = createRecord(imageId, structure);

    validate(record);

    return persist(record);
}

export { default as InvalidComic } from './InvalidComic';
