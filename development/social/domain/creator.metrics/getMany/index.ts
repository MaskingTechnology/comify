
import { type Identifier } from '@comify/common/primitives/identifier';

import toModels from '../_toModels';
import { type Metrics } from '../definitions';

import addMissing from './addMissing';
import retrieveExisting from './retrieveExisting';

export default async function (creatorIds: Identifier[]): Promise<Map<string, Metrics>>
{
    const existingRecords = await retrieveExisting(creatorIds);

    const allRecords = addMissing(creatorIds, existingRecords);

    return toModels(allRecords);
}
