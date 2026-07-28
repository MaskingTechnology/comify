
import { Requester } from '@comify/common/security';

import { Range } from '~/common/validateRange';

import { type SortOrder } from '../definitions';

import retrieve from './retrieve';

export default async function (requester: Requester, ids: string[], range: Range, order: SortOrder, search: string | undefined = undefined): Promise<string[]>
{
    const records = await retrieve(requester.tenantId, ids, order, range.limit, range.offset, search);

    return records.map(record => record.id);
}
