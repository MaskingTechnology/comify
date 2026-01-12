
import fileStore from './fileStore';

if (fileStore.connected)
{
    await fileStore.disconnect();
}
