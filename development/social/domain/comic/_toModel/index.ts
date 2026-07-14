
import getImageData from '~/image/getById';

import { type Data, type Comic } from '../definitions';

export default async function run(data: Data): Promise<Comic>
{
    const imageData = await getImageData(data.imageId);

    return { id: data.id, image: imageData };
}
