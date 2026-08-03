
import type { Identifier } from '@comify/common/primitives/identifier';

import type { Metrics } from '../definitions';
import toModels from '../_toModels';

import retrieveExisting from './retrieveExisting';
import addMissing from './addMissing';

export default async function (postIds: Identifier[]): Promise<Map<Identifier, Metrics>>
{
    const existingRecords = await retrieveExisting(postIds);

    const allRecords = addMissing(postIds, existingRecords);

    return toModels(allRecords);
}
