
import type { IdentityProvider } from './definitions/interfaces';
import UnknownImplementation from './errors/UnknownImplementation';
import createOpenID from './implementations/openid/create';

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
