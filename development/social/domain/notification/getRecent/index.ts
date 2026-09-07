
import { type Range } from '@comify/common/primitives/range';
import validateRange from '@comify/common/primitives/range/validate';
import { type Requester } from '@comify/common/security';

import toModels from '../_toModels';
import { type Notification } from '../definitions';

import retrieve from './retrieve';

export default async function (requester: Requester, range: Range): Promise<Notification[]>
{
    validateRange(range);

    const records = await retrieve(requester.principalId, range.limit, range.offset);

    const notifications = await toModels(requester, records);

    return notifications.values().toArray();
}
