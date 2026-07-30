
import { type Requester } from '@comify/common/security';

import type { RelationKey, Relation } from '../definitions';
import toModels from '../_toModels';

import retrieveEstablished from './retrieveEstablished';
import addUnestablished from './addUnestablished';

export default async function (requester: Requester, keys: RelationKey[]): Promise<Map<string, Relation>>
{
    const establishedRecords = await retrieveEstablished(keys);

    const allRecords = addUnestablished(keys, establishedRecords);

    return toModels(requester.tenantId, allRecords);
}
