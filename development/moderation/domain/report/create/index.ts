
import { type Identifier } from '@comify/common/primitives/identifier';
import { type Requester } from '@comify/common/security';

import createRecord from './createRecord';
import { type CreateData } from './definitions';
import persist from './persist';
import validate from './validate';

export default async function (requester: Requester, data: CreateData): Promise<Identifier>
{
    validate(data);

    const record = createRecord(requester.tenantId, requester.principalId, data.postId, data.reason, data.remark);

    return persist(record);
}

export { default as InvalidReport } from './InvalidReport';
