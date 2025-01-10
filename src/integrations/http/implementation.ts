
import { Http } from './definitions/interfaces';
import UnknownImplementation from './errors/UnknownImplementation';
import createFetch from './implementations/fetch/create';

const implementations = new Map<string, () => Http>([
    ['fetch', createFetch]
]);

const DEFAULT_HTTP_IMPLEMENTATION = 'fetch';

const implementationName = process.env.HTTP_IMPLEMENTATION ?? DEFAULT_HTTP_IMPLEMENTATION;
const creator = implementations.get(implementationName.toLowerCase());

if (creator === undefined)
{
    throw new UnknownImplementation(implementationName);
}

export default creator();
