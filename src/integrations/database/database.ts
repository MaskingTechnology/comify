
import Database, { MemoryDriver, MongoDBDriver } from '@theshelf/database';

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

const driver = process.env.DATABASE_DRIVER === 'mongodb'
    ? setUpMongoDB()
    : setUpMemory();

export default new Database(driver);
