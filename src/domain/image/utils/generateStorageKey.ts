
import { generateHash } from '../../../integrations/utilities/crypto';

export default function generateStorageKey(type: string, data: Buffer): string
{
    const content = data.toString('base64');
    const hash = generateHash(content);

    return `${type}/${hash}`;
}
