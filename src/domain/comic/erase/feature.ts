
import eraseImage from '^/domain/image/erase/feature';

import eraseData from './eraseData';
import retrieveData from './retrieveData';

export default async function feature(id: string): Promise<void>
{
    const data = await retrieveData(id);

    await eraseData(data.id);

    return eraseImage(data.imageId);
}
