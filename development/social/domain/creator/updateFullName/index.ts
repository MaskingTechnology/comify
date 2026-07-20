
import { type Requester } from '@comify/common/security';

import update from '../_update';

import validate from './validate';

export default async function run(requester: Requester, fullName: string): Promise<void>
{
    validate({ fullName });

    return update(requester.principalId, { fullName });
}

export { default as InvalidFullName } from './InvalidFullName';
