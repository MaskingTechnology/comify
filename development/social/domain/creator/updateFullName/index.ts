
import type { Requester } from '~/authentication';

import update from '../_update';
import validateData from './validateData';

export default async function run(requester: Requester, fullName: string): Promise<void>
{
    validateData({ fullName });

    return update(requester.id, { fullName });
}

export { default as InvalidFullName } from './InvalidFullName';
