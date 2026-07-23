
import getImageData from '~/image/getById';

import { type Record, type Comic } from '../definitions';

export default async function run(record: Record): Promise<Comic>
{
    const { id: $0, imageId: $1, ...comicData} = record;

    const imageData = await getImageData(record.imageId);

    return { ...comicData, image: imageData };
}
