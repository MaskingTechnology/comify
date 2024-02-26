
import ImageImport from './ImageImport';
import validate from './validate';

export default async function fromDataUrl(dataUrl: string): Promise<ImageImport>
{
    const matches = dataUrl.match(/^data:(image\/(\w+));base64,(.*)$/);

    if (matches === null)
    {
        throw new Error('Invalid data URL');
    }

    const filename = 'dataUrl';
    const mimeType = matches[1];
    const data = Buffer.from(matches[3], 'base64');
    const size = data.length;

    validate(mimeType, size);

    return new ImageImport(filename, mimeType, size, data);
}
