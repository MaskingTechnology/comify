
import { type Requester } from '@comify/common/security';

import toModels from '../_toModels';
import { type RelationKey, type Relation } from '../definitions';

import addUnestablished from './addUnestablished';
import retrieveEstablished from './retrieveEstablished';

export default async function (requester: Requester, keys: RelationKey[]): Promise<Map<string, Relation>>
{
    const establishedRecords = await retrieveEstablished(keys);

    const allRecords = addUnestablished(keys, establishedRecords);

    return toModels(requester.tenantId, allRecords);
}
