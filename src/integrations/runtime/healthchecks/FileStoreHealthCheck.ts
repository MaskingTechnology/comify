
import { HealthCheck } from 'jitar';

import { FileStore } from '^/integrations/filestore/definitions/interfaces';

export default class FileStoreHealthCheck implements HealthCheck
{
    #fileStore: FileStore;

    constructor(fileStore: FileStore)
    {
        this.#fileStore = fileStore;
    }

    get name() { return 'filestore'; }

    get timeout() { return 5000; }

    async isHealthy(): Promise<boolean>
    {
        return this.#fileStore.connected;
    }
}
