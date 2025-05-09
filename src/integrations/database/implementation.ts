
import type { Driver } from './definitions/interfaces';
import UnknownImplementation from './errors/UnknownImplementation';
import createMemoryDb from './implementations/memory/create';
import createMongoDb from './implementations/mongodb/create';

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
