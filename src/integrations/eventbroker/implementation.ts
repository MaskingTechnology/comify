
import { Driver } from './definitions/interfaces';
import UnknownImplementation from './errors/UnknownImplementation';
import createMemoryBroker from './implementations/memory/create';

const implementations = new Map<string, () => Driver>([
    ['memory', createMemoryBroker]
]);

const DEFAULT_BROKER_IMPLEMENTATION = 'memory';

const implementationName = process.env.EVENT_BROKER_IMPLEMENTATION ?? DEFAULT_BROKER_IMPLEMENTATION;
const creator = implementations.get(implementationName.toLowerCase());

if (creator === undefined)
{
    throw new UnknownImplementation(implementationName);
}

export default creator();
