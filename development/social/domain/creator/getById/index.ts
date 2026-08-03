
import type { TenantId } from '@comify/common/domain/tenant';
import type { Identifier } from '@comify/common/primitives/identifier';

import type { Creator } from '../definitions';
import toModel from '../_toModel';
import retrieve from '../_retrieveById';

export default async function (tenantId: TenantId, id: Identifier): Promise<Creator>
{
    const record = await retrieve(tenantId, id);

    return toModel(record);
}
