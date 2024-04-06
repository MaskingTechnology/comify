
import { FileStorage } from './definitions/interfaces.js';
import UnknownImplementation from './errors/UnknownImplementation.js';
import createMemoryFS from './implementations/memory/create.js';
import createMinioFS from './implementations/minio/create.js';

const implementations = new Map<string, () => FileStorage>([
    ['memory', createMemoryFS],
    ['minio', createMinioFS],
]);

const DEFAULT_FILE_STORAGE_IMPLEMENTATION = 'memory';

const implementationName = process.env.FILE_STORAGE_IMPLEMENTATION ?? DEFAULT_FILE_STORAGE_IMPLEMENTATION;
const creator = implementations.get(implementationName.toLowerCase());

if (creator === undefined)
{
    throw new UnknownImplementation(implementationName);
}

export default creator();
