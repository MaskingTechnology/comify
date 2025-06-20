
import find from '../find';
import createData from './createData';
import insertData from './insertData';
import InvalidOrigin from './InvalidOrigin';
import validateData from './validateData';

export default async function create(tenantId: string, origin: string): Promise<string>
{
    const data = createData(tenantId, origin);

    validateData(data);

    const exists = await find(origin);

    if (exists)
    {
        const messages = new Map<string, string>([
            ['origin', 'Origin already exists'],
        ]);

        throw new InvalidOrigin(messages);
    }

    return insertData(data);
}
