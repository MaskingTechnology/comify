
export interface FileStorage
{
    get connected(): boolean;

    connect(): Promise<void>;
    disconnect(): Promise<void>;
    writeFile(path: string, data: Buffer): Promise<void>;
    readFile(path: string): Promise<Buffer>;
    deleteFile(path: string): Promise<void>;
}
