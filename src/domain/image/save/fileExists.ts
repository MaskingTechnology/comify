
import fileStore from '@theshelf/filestore';

export default async function fileExists(storageKey: string): Promise<boolean>
{
    return fileStore.hasFile(storageKey);
}
