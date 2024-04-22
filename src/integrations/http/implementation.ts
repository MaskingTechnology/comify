
import { Http } from './definitions/interfaces.js';
import UnknownImplementation from './errors/UnknownImplementation.js';
import createFetch from './implementations/fetch/create.js';
import createMemory from './implementations/memory/create.js';

const implementations = new Map<string, () => Http>([
    ['fetch', createFetch],
    ['memory', createMemory]
]);

const DEFAULT_HTTP_IMPLEMENTATION = 'memory';

const implementationName = process.env.HTTP_IMPLEMENTATION ?? DEFAULT_HTTP_IMPLEMENTATION;
const creator = implementations.get(implementationName.toLowerCase());

if (creator === undefined)
{
    throw new UnknownImplementation(implementationName);
}

export default creator();
