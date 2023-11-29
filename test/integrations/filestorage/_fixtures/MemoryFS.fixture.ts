
import MemoryFS from '../../../../src/integrations/filestorage/implementations/MemoryFS.js';
import { FileNotFound } from '../../../../src/integrations/filestorage/definitions/errors.js';

const HELLO_FILE_NAME = 'hello.txt';
const HELLO_FILE_CONTENT = 'Hello, world!';
const HELLO_FILE_BUFFER = Buffer.from(HELLO_FILE_CONTENT);

const GOODBYE_FILE_NAME = 'goodbye.txt';
const GOODBYE_FILE_CONTENT = 'Goodbye!';
const GOODBYE_FILE_BUFFER = Buffer.from(GOODBYE_FILE_CONTENT);

const UNKNOWN_FILE_NAME = 'unknown.txt';

async function createMemoryFS(): Promise<MemoryFS>
{
    const fileStorage = new MemoryFS();

    await fileStorage.storeFile(HELLO_FILE_NAME, HELLO_FILE_BUFFER);

    return fileStorage;
}

export {
    HELLO_FILE_NAME, HELLO_FILE_CONTENT,
    GOODBYE_FILE_NAME, GOODBYE_FILE_BUFFER,
    UNKNOWN_FILE_NAME,
    createMemoryFS, FileNotFound
};
