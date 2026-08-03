
import { type Range } from '@comify/common/primitives/range';
import type { Identifier } from '@comify/common/primitives/identifier';
import { type Requester } from '@comify/common/security';

import retrieve from './retrieve';

export default async function (requester: Requester, ids: Identifier[], range: Range, search: string | undefined = undefined): Promise<string[]>
{
    const records = await retrieve(requester.tenantId, ids, range.limit, range.offset, search);

    return records.map(record => record.id);
}
