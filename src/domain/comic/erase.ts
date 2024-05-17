
import eraseImage from '^/domain/image/erase';

import eraseData from './repository/erase';
import retrieveData from './repository/retrieve';

export default async function erase(id: string): Promise<void>
{
    const data = await retrieveData(id);

    Promise.all([eraseData(data.id), eraseImage(data.imageId)]);
}
