
import type { Tenant } from '@comify/common/domain/tenant';

import type { Requester } from '~/authentication';
import type { Range } from '~/common/validateRange';
import validateRange from '~/common/validateRange';

import toModel from '../_toModel';
import type { SortOrder, Relation } from '../definitions';
import explore from '../_explore';

export default async function run(tenant: Tenant, requester: Requester, order: SortOrder, range: Range, search: string | undefined = undefined): Promise<Relation[]>
{
    validateRange(range);

    const data = await explore(tenant.id, requester.id, order, range.limit, range.offset, search);

    return Promise.all(data.map(item => toModel(tenant.id, item)));
}
