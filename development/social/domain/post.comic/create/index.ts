
import createImage from '~/image/create';

import { IMAGE_TYPE } from '../definitions';

import { type CreateData } from './definitions';
import createRecord from './createRecord';
import persist from './persist';
import validate from './validate';

export default async function (data: CreateData): Promise<string>
{
    validate(data);

    const imageId = await createImage(IMAGE_TYPE, data.imageDataUrl);

    const record = createRecord(imageId, data.structure);

    return persist(record);
}

export { default as InvalidComic } from './InvalidComic';
