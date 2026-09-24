
import { type Identifier } from '@comify/common/primitives/identifier';

import save from '../_save';
import validate from '../_validate';

import convertDataUrl from './convertDataUrl';

export default async function (type: string, dataUrl: string): Promise<Identifier>
{
    const image = await convertDataUrl(dataUrl);

    validate({ filename: image.filename, mimeType: image.mimeType, size: image.size });

    return save(type, image);
}

export { default as InvalidDataURL } from './InvalidDataURL';
