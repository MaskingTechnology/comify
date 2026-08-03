
import type { Identifier } from '@comify/common/primitives/identifier';

import type { Metrics } from '../definitions';
import toModels from '../_toModels';

import retrieveExisting from './retrieveExisting';
import addMissing from './addMissing';

export default async function (creatorIds: Identifier[]): Promise<Map<string, Metrics>>
{
    const existingRecords = await retrieveExisting(creatorIds);

    const allRecords = addMissing(creatorIds, existingRecords);

    return toModels(allRecords);
}
