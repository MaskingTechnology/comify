
import type { MemoryDriver } from '@theshelf/filestore';

import fileStore, { driver } from '@comify/common/integrations/fileStore';

import { FILES } from './files.fixture';
import { VALUES } from './values.fixture';

fileStore.connect();

async function empty(): Promise<void>
{
    (driver as MemoryDriver).clear();
}

async function withImage(): Promise<void>
{
    (driver as MemoryDriver).clear();

    await fileStore.writeFile(VALUES.STORAGE_KEYS.IMAGE, FILES.IMAGE);
}

export const FILE_STORES = { empty, withImage };
