
export interface FileStorage
{
    connect(configuration?: unknown): Promise<void>;
    disconnect(): Promise<void>;
    storeFile(path: string, data: Buffer): Promise<void>;
    readFile(path: string): Promise<Buffer>;
    deleteFile(path: string): Promise<void>;
}
