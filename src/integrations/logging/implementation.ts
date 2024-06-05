
import { LogProcessor } from './definitions/interfaces';
import UnknownImplementation from './errors/UnknownImplementation';
import createConsole from './implementations/console/create';

const implementations = new Map<string, () => LogProcessor>([
    ['console', createConsole]
]);

const DEFAULT_LOGGING_IMPLEMENTATION = 'console';

const implementationName = process.env.LOGGING_IMPLEMENTATION ?? DEFAULT_LOGGING_IMPLEMENTATION;
const creator = implementations.get(implementationName.toLowerCase());

if (creator === undefined)
{
    throw new UnknownImplementation(implementationName);
}

export default creator();
