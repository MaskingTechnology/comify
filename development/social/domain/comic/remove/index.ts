
import eraseImage from '~/image/_erase';

import retrieve from '../_retrieveById';

import eraseComic from './erase';

export default async function run(id: string): Promise<void>
{
    const record = await retrieve(id);

    await eraseComic(record.id);

    return eraseImage(record.imageId);
}
