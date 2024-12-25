
import eraseImage from '^/domain/image/erase/feature';

import getById from '../getById';

import eraseData from './eraseData';

export default async function feature(id: string): Promise<void>
{
    const data = await getById(id);

    await eraseData(data.id);

    return eraseImage(data.imageId);
}
