
import type { MemoryDriver } from '@theshelf/database';

import { driver } from '@comify/common/integrations/database';

async function empty()
{
    (driver as MemoryDriver).clear();
}

export const DATABASES = { empty };
