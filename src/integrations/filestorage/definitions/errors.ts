
export class FileSystemError extends Error
{
    constructor(message: string)
    {
        super(message);
    }
}

export class NotConnected extends FileSystemError
{
    constructor(message?: string)
    {
        super(message ?? 'File system not connected');
    }
}

export class FileNotFound extends FileSystemError
{
    constructor(path?: string)
    {
        super(path? `File not found: ${path}` : 'File not found');
    }
}
