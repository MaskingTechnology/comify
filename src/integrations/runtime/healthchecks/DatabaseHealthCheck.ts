
import type { HealthCheck } from 'jitar';

import type { Database } from '@theshelf/database';

export default class DatabaseHealthCheck implements HealthCheck
{
    readonly #database: Database;
    readonly #name = 'database';
    readonly #timeout = 5000;

    constructor(database: Database)
    {
        this.#database = database;
    }

    get name() { return this.#name; }

    get timeout() { return this.#timeout; }

    async isHealthy(): Promise<boolean>
    {
        return this.#database.connected;
    }
}
