
import Database, { MemoryDriver, MongoDBDriver } from '@theshelf/database';
import ConnectionManager from '@theshelf/connection';

import logger from '^/integrations/logging';

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

const database = new Database(driver);

const connectionManager = new ConnectionManager({
    name: 'Database',
    connectable: database,
    logger
});

export { database as default, connectionManager };
