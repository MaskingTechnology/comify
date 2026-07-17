
import type { Requester } from '~/authentication';

import update from '../_update';

import validate from './validate';

export default async function run(requester: Requester, fullName: string): Promise<void>
{
    validate({ fullName });

    return update(requester.id, { fullName });
}

export { default as InvalidFullName } from './InvalidFullName';
