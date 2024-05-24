
import { generateId } from '^/integrations/utilities/crypto';

export type Data = {
    readonly id: string;
    readonly storageKey: string;
    readonly filename: string;
    readonly mimeType: string;
    readonly size: number;
};

export default function createData(storageKey: string, filename: string, mimeType: string, size: number): Data
{
    const id = generateId();

    return { id, storageKey, filename, mimeType, size };
}
