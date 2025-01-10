
import { HealthCheck } from 'jitar';

import { FileStore } from '^/integrations/filestore/definitions/interfaces';

export default class FileStoreHealthCheck implements HealthCheck
{
    readonly #fileStore: FileStore;
    readonly #name = 'filestore';
    readonly #timeout = 5000;

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
