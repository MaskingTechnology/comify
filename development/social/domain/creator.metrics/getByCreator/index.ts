
import type { Metrics } from '../definitions';
import toModel from '../_toModel';

import retrieveByCreator from '../_retrieveByCreator';

export default async function run(creatorId: string): Promise<Metrics>
{
    const record = await retrieveByCreator(creatorId);

    return toModel(record);
}
