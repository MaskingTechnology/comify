
import ImageData from './ImageData';

import { images } from '../dummydata';

export default async function retrieveData(id: string): Promise<ImageData>
{
    return images.get(id) as ImageData;
}
