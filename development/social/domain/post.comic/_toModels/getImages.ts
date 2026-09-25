
import { type ImageData } from '~/image';
import getImageData from '~/image/getManyById';

import { type Record } from '../definitions';

export default async function (records: Record[]): Promise<Map<string, ImageData>>
{
    const imageIds = Array.from(new Set(records.map(record => record.imageId)));

    return getImageData(imageIds);
}
