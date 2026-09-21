
import { type Tenant } from '../definitions';

import retrieve from './retrieve';
import validate from './validate';

export default async function (origin: string): Promise<Tenant>
{
    validate(origin);

    const record = await retrieve(origin);

    return { id: record.id, origin: origin };
}
