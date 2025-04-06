
import type { Requester } from '^/domain/authentication';

import getById from '../getById';
import type { DataModel } from '../types';

export default async function getMe(requester: Requester): Promise<DataModel>
{
    return getById({ tenantId: requester.tenantId, id: requester.id });
}
