
import type { Image } from '../types';
import InvalidDataURL from './InvalidDataURL';

const DATA_URL_REGEX = /^data:(image\/(\w+));base64,(.*)$/;

export default async function convertDataUrl(dataUrl: string): Promise<Image>
{
    const matches = DATA_URL_REGEX.exec(dataUrl);

    if (matches === null)
    {
        throw new InvalidDataURL();
    }

    const filename = 'dataUrl';
    const mimeType = matches[1];
    const buffer = Buffer.from(matches[3], 'base64');
    const size = buffer.length;

    return { filename, mimeType, size, buffer };
}
