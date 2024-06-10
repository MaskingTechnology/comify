
export interface LogProcessor
{
    logInfo(message: string): Promise<void>;

    logWarn(message: string): Promise<void>;

    logError(message: string): Promise<void>;

    logDebug(message: string): Promise<void>;
}
