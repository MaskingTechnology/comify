
import { Driver } from './definitions/interfaces';
import UnknownImplementation from './errors/UnknownImplementation';
import createMemoryBroker from './implementations/memory/create';
// import createKafkaBroker from './implementations/kafka/create';

const implementations = new Map<string, () => Driver>([
    ['memory', createMemoryBroker],
    //['kafka', createKafkaBroker],
]);

const DEFAULT_BROKER_IMPLEMENTATION = 'memory';

const implementationName = process.env.EVENT_BROKER_IMPLEMENTATION ?? DEFAULT_BROKER_IMPLEMENTATION;
const creator = implementations.get(implementationName.toLowerCase());

if (creator === undefined)
{
    throw new UnknownImplementation(implementationName);
}

export default creator();
