
import type { TenantId } from '@comify/common/domain/tenant';

import getCreator from '~/creator/getById';

import type { Record, Relation } from '../definitions';

import createModel from './createModel';

export default async function (tenantId: TenantId, record: Record): Promise<Relation>
{
    const creator = await getCreator(tenantId, record.followingId);

    return createModel(record, creator);
}
