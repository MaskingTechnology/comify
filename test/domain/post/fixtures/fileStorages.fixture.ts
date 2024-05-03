
import fileStorage from '^/integrations/filestorage/module';

fileStorage.connect();

async function empty()
{
    await fileStorage.clear();

    return fileStorage;
}

export const FILE_STORAGES = { empty };
