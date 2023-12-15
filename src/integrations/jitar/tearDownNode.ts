
import FileStorage from '../filestorage/module';

await FileStorage.disconnect();

console.log('Node teardown complete');
