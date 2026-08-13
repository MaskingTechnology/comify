
import type { MemoryDriver } from '@theshelf/filestore';

import fileStore, { driver as fileStoreDriver } from '@comify/common/integrations/fileStore';

import { IMAGE_STORAGE_KEYS, IMAGES } from '../data';

export async function seedImages(): Promise<void>
{
    (fileStoreDriver as MemoryDriver).clear();

    await fileStore.writeFile(IMAGE_STORAGE_KEYS.PROFILE, IMAGES.PROFILE);
    await fileStore.writeFile(IMAGE_STORAGE_KEYS.COMIC, IMAGES.COMIC);
}
