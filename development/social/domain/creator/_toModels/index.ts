
import type { Identifier } from '@comify/common/primitives/identifier';

import { type Record, type Creator } from '../definitions';

import getReferences from './getReferences';
import createModels from './createModels';

export default async function (records: Record[]): Promise<Map<Identifier, Creator>>
{
    if (records.length === 0)
    {
        return new Map();
    }

    const references = await getReferences(records);

    return createModels(records, references);
}
