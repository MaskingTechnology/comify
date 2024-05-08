
import FileSystemError from './FileSystemError.js';

export default class UnknownImplementation extends FileSystemError
{
    constructor(name?: string)
    {
        super(`Unknown file system implementation: ${name}`);
    }
}
