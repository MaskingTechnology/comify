
import type { TenantId } from '@comify/common/domain/tenant';

import type { Record, Relation, RelationId } from '../definitions';

import getCreators from './getCreators';
import createModels from './createModels';

export default async function (tenantId: TenantId, records: Record[]): Promise<Map<RelationId, Relation>>
{
    if (records.length === 0)
    {
        return new Map();
    }

    const creators = await getCreators(tenantId, records);

    return createModels(records, creators);
}
