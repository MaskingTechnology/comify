
import { type Record } from '../definitions';
import { logger } from '../integrations';

import retrieve from './retrieve';
import PostNotFound from './PostNotFound';

export default async function run(tenantId: string, id: string): Promise<Record>
{
    const record = await retrieve(tenantId, id);

    if (record === undefined)
    {
        logger.warn(`Post with id '${id}' could not be found.`);

        throw new PostNotFound();
    }

    return record;
}
