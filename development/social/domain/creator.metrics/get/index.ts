
import type { Metrics } from '../definitions';
import toModel from '../_toModel';

import retrieve from '../_retrieveByCreator';

export default async function run(creatorId: string): Promise<Metrics>
{
    const record = await retrieve(creatorId);

    return toModel(record);
}
