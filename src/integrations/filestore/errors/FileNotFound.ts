
import FileSystemError from './FileSystemError';

export default class FileNotFound extends FileSystemError
{
    constructor(path?: string)
    {
        super(path ? `File not found: ${path}` : 'File not found');
    }
}
