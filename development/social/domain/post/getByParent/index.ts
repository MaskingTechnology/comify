
import type { Requester } from '~/authentication';
import filterResolved from '~/common/filterResolved';
import type { Range } from '~/common/validateRange';
import type { Tenant } from '@comify/common/domain/tenant';

import type { Post } from '../definitions';
import toModel from '../_toModel';
import retrieveByParent from '../_retrieveByParent';

export default async function run(tenant: Tenant, requester: Requester, postId: string, range: Range): Promise<Post[]>
{
    const data = await retrieveByParent(tenant.id, postId, range.limit, range.offset);

    const posts = data.map(item => toModel(tenant, requester, item));

    return filterResolved(posts);
}
