
import database from '../database/implementations/MongoDb';

await database.connect('mongodb://root:example@localhost:27017', 'comify');
