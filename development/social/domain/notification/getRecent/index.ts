
import type { Tenant } from '@comify/common/domain/tenant';

import type { Requester } from '~/authentication';
import filterResolved from '~/common/filterResolved';
import type { Range } from '~/common/validateRange';
import validateRange from '~/common/validateRange';

import type { Notification } from '../definitions';
import toModel from '../_toModel';
import retrieveRecent from '../_retrieveRecent';

export default async function run(tenant: Tenant, requester: Requester, range: Range): Promise<Notification[]>
{
    validateRange(range);

    const record = await retrieveRecent(requester.id, range.limit, range.offset);

    const notifications = record.map(item => toModel(tenant, requester, item));

    return filterResolved(notifications);
}
