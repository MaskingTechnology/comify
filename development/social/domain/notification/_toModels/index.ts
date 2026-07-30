
import { type Requester } from '@comify/common/security';

import type { Record, Notification } from '../definitions';

import getReferences from './getReferences';
import createModels from './createModels';

export default async function (requester: Requester, records: Record[]): Promise<Map<string, Notification>>
{
    if (records.length === 0)
    {
        return new Map();
    }

    const references = await getReferences(requester, records);

    return createModels(records, references);
}
