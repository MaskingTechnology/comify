
import { type Tenant } from '@comify/common/domain/tenant';

import retrieve from './retrieve';

export default async function (tenant: Tenant, email: string): Promise<string | undefined>
{
    const record = await retrieve(tenant.id, email);

    return record?.id;
}
