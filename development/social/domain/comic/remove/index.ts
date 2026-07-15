
import eraseImage from '~/image/_erase';

import retrieveById from '../_retrieveById';
import eraseData from './eraseData';

export default async function run(id: string): Promise<void>
{
    const data = await retrieveById(id);

    await eraseData(data.id);

    return eraseImage(data.imageId);
}
