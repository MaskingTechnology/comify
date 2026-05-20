
import type { Requester } from '^/domain/authentication';

import update from '../update';
import validateData from './validateData';

export default async function updateFullName(requester: Requester, fullName: string): Promise<void>
{
    validateData({ fullName });

    return update(requester.id, { fullName });
}
