
import type { Requester } from '^/domain/authentication/types';

import update from '../update/feature';
import validateData from './validateData';

export default async function feature(requester: Requester, fullName: string): Promise<void>
{
    validateData({ fullName });

    return update(requester.id, { fullName });
}
