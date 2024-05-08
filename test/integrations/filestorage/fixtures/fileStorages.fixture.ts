
import fileStorage from '^/integrations/filestorage/module';

import { FILES } from './files.fixture';
import { VALUES } from './values.fixture';

await fileStorage.connect();

async function withFile()
{
    await fileStorage.clear();

    await fileStorage.writeFile(VALUES.FILENAMES.HELLO, FILES.HELLO);
}

export const FILE_STORAGES = { withFile };
