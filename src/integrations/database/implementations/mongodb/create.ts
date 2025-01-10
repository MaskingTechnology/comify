
import MongoDb from './MongoDb';

export default function create(): MongoDb
{
    const connectionString = process.env.MONGODB_CONNECTION_STRING ?? 'undefined';
    const databaseName = process.env.MONGODB_DATABASE_NAME ?? 'undefined';

    return new MongoDb(connectionString, databaseName);
}
