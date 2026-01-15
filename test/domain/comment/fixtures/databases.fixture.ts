
import { MemoryDriver } from '@theshelf/database';

import { driver } from '^/integrations/database';

async function empty(): Promise<void>
{
    (driver as MemoryDriver).clear();
}

export const DATABASES = { empty };
