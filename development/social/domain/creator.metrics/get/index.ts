
import { type Identifier } from '@comify/common/primitives/identifier';

import toModel from '../_toModel';
import { type Metrics } from '../definitions';

import createMissing from './createMissing';
import retrieveExisting from './retrieveExisting';

export default async function (postId: Identifier): Promise<Metrics>
{
    // If the record doesn't exist, we create an empty dummy record to allow
    // the system to process the creator added event and replicate the record.

    const record = await retrieveExisting(postId)
        ?? createMissing(postId);

    return toModel(record);
}
