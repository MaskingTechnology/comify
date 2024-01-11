
import fileStorage from '../filestorage/module';
import database from '../database/module';

await fileStorage.connect();
await database.connect('mongodb://development:development@localhost:27017', 'comify');

console.log('Node setup complete');
