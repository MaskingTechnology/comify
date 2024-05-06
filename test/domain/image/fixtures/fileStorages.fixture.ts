
import fileStorage from '^/integrations/filestorage/module';

fileStorage.connect();

async function empty(): Promise<void>
{
    await fileStorage.clear();
}

export const FILE_STORAGES = { empty };
