
import { type Requester } from '@comify/common/security';
import type { Range } from '~/common/validateRange';
import validateRange from '~/common/validateRange';

import toModel from '../_toModel';
import type { SortOrder, Relation } from '../definitions';
import explore from '../_explore';

export default async function run(requester: Requester, order: SortOrder, range: Range, search: string | undefined = undefined): Promise<Relation[]>
{
    validateRange(range);

    const records = await explore(requester.tenantId, requester.principalId, order, range.limit, range.offset, search);

    return Promise.all(records.map(item => toModel(requester.tenantId, item)));
}
