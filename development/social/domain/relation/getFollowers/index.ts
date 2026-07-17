
import type { Tenant } from '@comify/common/domain/tenant';

import type { Requester } from '~/authentication';
import type { Range } from '~/common/validateRange';
import validateRange from '~/common/validateRange';

import type { Relation } from '../definitions';
import toModel from '../_toModel';
import retrieve from '../_retrieveFollowers';

export default async function run(tenant: Tenant, requester: Requester, followingId: string, range: Range): Promise<Relation[]>
{
    validateRange(range);

    const records = await retrieve(requester, followingId, range.limit, range.offset);

    return Promise.all(records.map(record => toModel(tenant.id, record)));
}
