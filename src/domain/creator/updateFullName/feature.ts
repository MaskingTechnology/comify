
import type { Requester } from '^/domain/authentication/types';

import update from '../update/feature';

export default async function feature(requester: Requester, fullName: string): Promise<void>
{
    return update(requester.id, { fullName });
}
