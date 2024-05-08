
export interface FileStorage
{
    get connected(): boolean;

    connect(): Promise<void>;
    disconnect(): Promise<void>;
    hasFile(path: string): Promise<boolean>;
    writeFile(path: string, data: Buffer): Promise<void>;
    readFile(path: string): Promise<Buffer>;
    deleteFile(path: string): Promise<void>;
    clear(): Promise<void>;
}
