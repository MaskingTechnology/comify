
import { type Identifier } from '@comify/common/primitives/identifier';
import { type Requester } from '@comify/common/security';

import { type Record, type Notification } from '../definitions';

import createModels from './createModels';
import getReferences from './getReferences';

export default async function (requester: Requester, records: Record[]): Promise<Map<Identifier, Notification>>
{
    if (records.length === 0)
    {
        return new Map();
    }

    const references = await getReferences(requester, records);

    return createModels(records, references);
}
