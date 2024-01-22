
import { IdentityProvider } from './definitions/interfaces.js';
import { UnknownImplementation } from './definitions/errors.js';

import createOpenID from './implementations/openid/create.js';

const implementations = new Map<string, () => IdentityProvider>([
    ['openid', createOpenID],
]);

const DEFAULT_AUTHENTICATION_IMPLEMENTATION = 'openid';

const implementationName = process.env.AUTHENTICATION_IMPLEMENTATION ?? DEFAULT_AUTHENTICATION_IMPLEMENTATION;
const creator = implementations.get(implementationName.toLowerCase());

if (creator === undefined)
{
    throw new UnknownImplementation(implementationName);
}

export default creator();
