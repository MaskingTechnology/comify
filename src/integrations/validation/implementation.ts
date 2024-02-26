
import { UnknownImplementation } from './definitions/errors.js';
import { Validator } from './definitions/interfaces.js';
import createZod from './implementations/zod/create.js';

const implementations = new Map<string, () => Validator>([
    ['zod', createZod]
]);

const DEFAULT_VALIDATION_IMPLEMENTATION = 'zod';

const implementationName = process.env.VALIDATION_IMPLEMENTATION ?? DEFAULT_VALIDATION_IMPLEMENTATION;
const creator = implementations.get(implementationName.toLowerCase());

if (creator === undefined)
{
    throw new UnknownImplementation(implementationName);
}

export default creator();
