
import fileStore from '^/integrations/filestore';

export default async function fileExists(storageKey: string): Promise<boolean>
{
    return fileStore.hasFile(storageKey);
}
