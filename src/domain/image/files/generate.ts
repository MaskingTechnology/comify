import { generateHash } from '../../../integrations/utilities/crypto.js';

export default function generate(picture: string, mimeType: string, imageType: string): string
{
    const fileName = generateHash(picture);
    const extension = mimeType.split('/')[1];

    return `${imageType}/${fileName}.${extension}`;
}
