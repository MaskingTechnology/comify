
import getImageData from '~/image/getById';

import { type Data, type Comic } from '../definitions';

export default async function run(data: Data): Promise<Comic>
{
    const { id: $0, imageId: $1, ...comicData} = data;

    const imageData = await getImageData(data.imageId);

    return { ...comicData, image: imageData };
}
