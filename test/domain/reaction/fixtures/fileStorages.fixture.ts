
import fileStorage from '^/integrations/filestorage/module';

import { FILES } from './files.fixture';
import { VALUES } from './values.fixture';

fileStorage.connect();

async function withImage()
{
    await fileStorage.clear();

    await fileStorage.writeFile(VALUES.STORAGE_KEYS.IMAGE, FILES.IMAGE);

    return fileStorage;
}

export const FILE_STORAGES = { withImage };
