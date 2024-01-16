
import { HealthCheck } from 'jitar';

import { Database } from '../../database/definitions/interfaces';

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
