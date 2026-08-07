
import type { TenantId } from '@comify/common/domain/tenant';
import type { Identifier } from '@comify/common/primitives/identifier';

import type { Creator } from '~/creator';
import getCreators from '~/creator/getManyById';

import type { Record } from '../definitions';

export default async function (tenantId: TenantId, records: Record[]): Promise<Map<Identifier, Creator>>
{
    const followingIds = new Set(records.map(record => record.followingId));

    return getCreators(tenantId, [...followingIds]);
}
