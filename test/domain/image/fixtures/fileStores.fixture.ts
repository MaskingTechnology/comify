
import type { MemoryDriver } from '@theshelf/filestore';

import { driver } from '^/integrations/fileStore';

async function empty(): Promise<void>
{
    (driver as MemoryDriver).clear();
}

export const FILE_STORES = { empty };
