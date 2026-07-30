
import { type Requester } from '@comify/common/security';

import validateRange, { type Range } from '~/common/validateRange';

import type { Notification } from '../definitions';

import toModels from '../_toModels';
import retrieve from './retrieve';

export default async function (requester: Requester, range: Range): Promise<Notification[]>
{
    validateRange(range);

    const records = await retrieve(requester.principalId, range.limit, range.offset);

    const notifications = await toModels(requester, records);

    return notifications.values().toArray();
}
