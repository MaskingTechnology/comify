
import Database, { MemoryDriver } from '@theshelf/database';
import { MongoDBDriver } from '@theshelf/database-driver-mongodb';
import ConnectionManager from '@theshelf/connection';

import { shelfLogger } from '^/integrations/logging';

function setUpMemory(): MemoryDriver
{
    return new MemoryDriver();
}

function setUpMongoDB(): MongoDBDriver
{
    return new MongoDBDriver({
        connectionString: process.env.MONGODB_CONNECTION_STRING ?? '',
        databaseName: process.env.MONGODB_DATABASE_NAME ?? ''
    });
}

export const driver = process.env.DATABASE_DRIVER === 'mongodb'
    ? setUpMongoDB()
    : setUpMemory();

const database = new Database(driver, shelfLogger);

const connectionManager = new ConnectionManager({
    name: 'Database',
    connectable: database
}, shelfLogger);

export { database as default, connectionManager };
