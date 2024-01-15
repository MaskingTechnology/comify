
import database from './implementations/MongoDb';

const DEFAULT_CONNECTION_STRING = 'mongodb://development:development@localhost:27017';
const DEFAULT_DATABASE_NAME = 'development';

const connectionString = process.env.MONGODB_CONNECTION_STRING ?? DEFAULT_CONNECTION_STRING;
const databaseName = process.env.MONGODB_DATABASE_NAME ?? DEFAULT_DATABASE_NAME;

await database.connect(connectionString, databaseName);
