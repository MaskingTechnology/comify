
import { Driver } from './definitions/interfaces.js';
import UnknownImplementation from './errors/UnknownImplementation.js';
import createMemoryDb from './implementations/memory/create.js';
import createMongoDb from './implementations/mongodb/create.js';

const implementations = new Map<string, () => Driver>([
    ['memory', createMemoryDb],
    ['mongodb', createMongoDb],
]);

const DEFAULT_DATABASE_IMPLEMENTATION = 'memory';

const implementationName = process.env.DATABASE_IMPLEMENTATION ?? DEFAULT_DATABASE_IMPLEMENTATION;
const creator = implementations.get(implementationName.toLowerCase());

if (creator === undefined)
{
    throw new UnknownImplementation(implementationName);
}

export default creator();
