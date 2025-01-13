
import { FileStore } from './definitions/interfaces';
import UnknownImplementation from './errors/UnknownImplementation';
import createMemoryFS from './implementations/memory/create';
import createMinioFS from './implementations/minio/create';

const implementations = new Map<string, () => FileStore>([
    ['memory', createMemoryFS],
    ['minio', createMinioFS],
]);

const DEFAULT_FILE_STORE_IMPLEMENTATION = 'memory';

const implementationName = process.env.FILE_STORE_IMPLEMENTATION ?? DEFAULT_FILE_STORE_IMPLEMENTATION;
const creator = implementations.get(implementationName.toLowerCase());

if (creator === undefined)
{
    throw new UnknownImplementation(implementationName);
}

export default creator();
