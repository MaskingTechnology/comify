
import { type Tenant } from '@comify/common/domain/tenant';

import { type Email } from '../definitions';

import retrieve from './retrieve';

export default async function (tenant: Tenant, email: Email): Promise<string | undefined>
{
    const record = await retrieve(tenant.id, email);

    return record?.id;
}
