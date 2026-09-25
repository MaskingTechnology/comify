
import { type TenantId } from '@comify/common/domain/tenant';

import { type Record, type Relation, type RelationId } from '../definitions';

import createModels from './createModels';
import getCreators from './getCreators';

export default async function (tenantId: TenantId, records: Record[]): Promise<Map<RelationId, Relation>>
{
    if (records.length === 0)
    {
        return new Map();
    }

    const creators = await getCreators(tenantId, records);

    return createModels(records, creators);
}
