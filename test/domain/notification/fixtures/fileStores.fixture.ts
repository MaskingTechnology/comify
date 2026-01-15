
import { MemoryDriver } from '@theshelf/filestore';

import fileStore, { driver } from '^/integrations/fileStore';

import { FILES } from './files.fixture';
import { VALUES } from './values.fixture';

async function withImage(): Promise<void>
{
    (driver as MemoryDriver).clear();

    await fileStore.writeFile(VALUES.STORAGE_KEYS.IMAGE, FILES.IMAGE);
}

export const FILE_STORES = { withImage };
