
import save from '../_save';
import validate from '../validate';

import downloadImage from './downloadImage';
import getMetaData from './getMetaData';

export default async function run(type: string, imageUrl: string): Promise<string>
{
    const metaData = await getMetaData(imageUrl);

    validate(metaData);

    const buffer = await downloadImage(imageUrl);

    const image = { ...metaData, buffer };

    return save(type, image);
}

export { default as ImageNotDownloaded } from './ImageNotDownloaded';
