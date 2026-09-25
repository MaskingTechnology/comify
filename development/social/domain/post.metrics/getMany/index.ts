
import { type Identifier } from '@comify/common/primitives/identifier';

import toModels from '../_toModels';
import { type Metrics } from '../definitions';

import addMissing from './addMissing';
import retrieveExisting from './retrieveExisting';

export default async function (postIds: Identifier[]): Promise<Map<Identifier, Metrics>>
{
    const existingRecords = await retrieveExisting(postIds);

    const allRecords = addMissing(postIds, existingRecords);

    return toModels(allRecords);
}
