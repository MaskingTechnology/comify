
import type ImageData from './ImageData';

import { images } from '../../dummydata';

export default async function retrieve(id: string): Promise<ImageData>
{
    return images.get(id) as ImageData;
}
