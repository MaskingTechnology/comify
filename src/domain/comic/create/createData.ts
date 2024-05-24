
import { generateId } from '^/integrations/utilities/crypto';

export type Data = {
    readonly id: string;
    readonly imageId: string;
    readonly structure?: string;
};

export default function createData(imageId: string, structure?: string): Data
{
    const id = generateId();

    return { id, imageId, structure };
}
