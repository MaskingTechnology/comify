
import { generateHash } from '@comify/common/integrations/utilities/crypto';

export default function (type: string, record: Buffer): string
{
    const content = record.toString('base64');
    const hash = generateHash(content);

    return `${type}/${hash}`;
}
