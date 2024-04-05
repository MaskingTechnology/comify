
import FileSystemError from './FileSystemError.js';

export default class NotConnected extends FileSystemError
{
    constructor(message?: string)
    {
        super(message ?? 'File system not connected');
    }
}
