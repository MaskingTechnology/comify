
import fileStorage from './module';

if (fileStorage.connected)
{
    await fileStorage.disconnect();
}
