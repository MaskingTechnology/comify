
import { type TenantId } from '@comify/common/domain/tenant';
import { type Identifier } from '@comify/common/primitives/identifier';

import toModel from '../_toModel';
import { type Creator } from '../definitions';

import retrieve from './retrieve';

export default async function (tenantId: TenantId, id: Identifier): Promise<Creator>
{
    const record = await retrieve(tenantId, id);

    return toModel(record);
}
