
import fileStore from '^/integrations/filestore/module';

import { FILES } from './files.fixture';
import { VALUES } from './values.fixture';

fileStore.connect();

async function withImage(): Promise<void>
{
    await fileStore.clear();

    await fileStore.writeFile(VALUES.STORAGE_KEYS.IMAGE, FILES.IMAGE);
}

export const FILE_STORES = { withImage };
