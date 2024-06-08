
import { HealthCheck } from 'jitar';

import type { Database } from '^/integrations/database/module';

export default class DatabaseHealthCheck implements HealthCheck
{
    #database: Database;

    constructor(database: Database)
    {
        this.#database = database;
    }

    get name() { return 'database'; }

    get timeout() { return 5000; }

    async isHealthy(): Promise<boolean>
    {
        return this.#database.connected;
    }
}
