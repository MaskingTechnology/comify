
import getImageData from '^/domain/image/getById/feature';

import type { DataModel } from '../types';
import type { AggregatedData } from './types';

export default async function feature(data: DataModel): Promise<AggregatedData>
{
    const imageData = await getImageData(data.imageId);

    return { id: data.id, image: imageData };
}
