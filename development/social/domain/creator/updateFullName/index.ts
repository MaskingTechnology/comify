
import { type Requester } from '@comify/common/security';

import persist from './persist';

import validate from './validate';

export default async function run(requester: Requester, fullName: string): Promise<void>
{
    validate(fullName);

    return persist(requester.principalId, fullName);
}

export { default as InvalidFullName } from './InvalidFullName';
