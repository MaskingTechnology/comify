
import { MemoryDriver } from '@theshelf/database';

import { driver } from '^/integrations/database';

async function empty()
{
    (driver as MemoryDriver).clear();
}

export const DATABASES = { empty };
