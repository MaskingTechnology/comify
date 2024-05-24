
import { generateId } from '^/integrations/utilities/crypto';

export type Data = {
    readonly id: string;
    readonly message: string;
};

export default function createData(message: string): Data
{
    const id = generateId();

    return { id, message };
}
