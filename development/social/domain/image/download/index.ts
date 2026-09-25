
import { type Identifier } from '@comify/common/primitives/identifier';

import save from '../_save';
import validate from '../_validate';

import downloadImage from './downloadImage';
import getMetaData from './getMetaData';

export default async function (type: string, url: URL): Promise<Identifier>
{
    const metaData = await getMetaData(url);

    validate(metaData);

    const buffer = await downloadImage(url);

    const image = { ...metaData, buffer };

    return save(type, image);
}

export { default as ImageNotDownloaded } from './ImageNotDownloaded';
