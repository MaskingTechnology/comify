
import { HealthCheck } from 'jitar';
import { FileStorage } from '../../filestorage/definitions/interfaces';

export default class FileStorageHealthCheck implements HealthCheck
{
    #fileStorage: FileStorage;

    constructor(fileStorage: FileStorage)
    {
        this.#fileStorage = fileStorage;
    }

    get name() { return 'filestorage'; }

    get timeout() { return 5000; }

    async isHealthy(): Promise<boolean>
    {
        return this.#fileStorage.connected;
    }
}
