
import { type Identifier } from '@comify/common/primitives/identifier';

import createImage from '~/image/create';

import { IMAGE_TYPE } from '../definitions';

import createRecord from './createRecord';
import { type CreateData } from './definitions';
import persist from './persist';
import validate from './validate';

export default async function (data: CreateData): Promise<Identifier>
{
    validate(data);

    const imageId = await createImage(IMAGE_TYPE, data.imageDataUrl);

    const record = createRecord(imageId, data.structure);

    return persist(record);
}
