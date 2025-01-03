
import { HealthCheck } from 'jitar';

import { FileStore } from '^/integrations/filestore/definitions/interfaces';

export default class FileStoreHealthCheck implements HealthCheck
{
    #fileStore: FileStore;
    #name = 'filestore';
    #timeout = 5000;

    constructor(fileStore: FileStore)
    {
        this.#fileStore = fileStore;
    }

    get name() { return this.#name; }

    get timeout() { return this.#timeout; }

    async isHealthy(): Promise<boolean>
    {
        return this.#fileStore.connected;
    }
}
