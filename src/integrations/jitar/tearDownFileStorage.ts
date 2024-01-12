
import fileStorage from '../filestorage/module';

if (fileStorage.connected)
{
    await fileStorage.disconnect();
}
