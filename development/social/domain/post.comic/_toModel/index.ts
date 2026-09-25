
import getImageData from '~/image/getById';

import { type Record, type Comic } from '../definitions';

import createModel from './createModel';

export default async function (record: Record): Promise<Comic>
{
    const image = await getImageData(record.imageId);

    return createModel(record, image);
}
