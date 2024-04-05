
import { FileStorage } from '../../../../src/integrations/filestorage/definitions/interfaces';
import FileNotFound from '../../../../src/integrations/filestorage/errors/FileNotFound';
import Memory from '../../../../src/integrations/filestorage/implementations/memory/Memory';

const HELLO_FILE_NAME = 'hello.txt';
const HELLO_FILE_CONTENT = 'Hello, world!';
const HELLO_FILE_BUFFER = Buffer.from(HELLO_FILE_CONTENT);

const GOODBYE_FILE_NAME = 'goodbye.txt';
const GOODBYE_FILE_CONTENT = 'Goodbye!';
const GOODBYE_FILE_BUFFER = Buffer.from(GOODBYE_FILE_CONTENT);

const UNKNOWN_FILE_NAME = 'unknown.txt';

const fileStorage = new Memory();
await fileStorage.connect();

async function setUpMemoryFS(): Promise<FileStorage>
{
    await fileStorage.disconnect();
    await fileStorage.connect();
    await fileStorage.writeFile(HELLO_FILE_NAME, HELLO_FILE_BUFFER);

    return fileStorage;
}

export
{
    FileNotFound, GOODBYE_FILE_BUFFER, GOODBYE_FILE_NAME, HELLO_FILE_CONTENT, HELLO_FILE_NAME, UNKNOWN_FILE_NAME,
    setUpMemoryFS
};

