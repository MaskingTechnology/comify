
import type { Metrics } from '../definitions';
import toModel from '../_toModel';

import retrieveExisting from './retrieveExisting';
import createMissing from './createMissing';

export default async function (postId: string): Promise<Metrics>
{
    // If the record doesn't exist, we create an empty dummy record to allow
    // the system to process the post added event and replicate the record.

    const record = await retrieveExisting(postId)
        ?? createMissing(postId);

    return toModel(record);
}
