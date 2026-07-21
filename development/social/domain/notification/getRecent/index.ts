
import { type Requester } from '@comify/common/security';

import filterResolved from '~/common/filterResolved';
import validateRange, { type Range } from '~/common/validateRange';

import type { Notification } from '../definitions';

import toModel from '../_toModel';
import retrieve from './retrieve';

export default async function run(requester: Requester, range: Range): Promise<Notification[]>
{
    validateRange(range);

    const record = await retrieve(requester.principalId, range.limit, range.offset);

    const notifications = record.map(item => toModel(requester, item));

    return filterResolved(notifications);
}
