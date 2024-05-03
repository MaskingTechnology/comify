
import InvalidDataURL from '../errors/InvalidDataURL';
import ImageImport from './ImageImport';
import validate from './validate';

const DATA_URL_REGEX = /^data:(image\/(\w+));base64,(.*)$/;

export default async function fromDataUrl(dataUrl: string): Promise<ImageImport>
{
    const matches = DATA_URL_REGEX.exec(dataUrl);

    if (matches === null)
    {
        throw new InvalidDataURL();
    }

    const filename = 'dataUrl';
    const mimeType = matches[1];
    const data = Buffer.from(matches[3], 'base64');
    const size = data.length;

    validate(mimeType, size);

    return new ImageImport(filename, mimeType, size, data);
}
