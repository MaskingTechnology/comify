
import type { Requester } from '~/authentication';
import filterResolved from '~/common/filterResolved';
import type { Range } from '~/common/validateRange';
import validateRange from '~/common/validateRange';
import type { Tenant } from '@comify/common/domain/tenant';

import type { Post } from '../definitions';
import toModel from '../_toModel';
import getByFollowing from '../_retrieveByFollowing';

export default async function run(tenant: Tenant, requester: Requester, range: Range): Promise<Post[]>
{
    validateRange(range);

    const data = await getByFollowing(requester, range.limit, range.offset);

    const posts = data.map(item => toModel(tenant, requester, item));

    return filterResolved(posts);
}
