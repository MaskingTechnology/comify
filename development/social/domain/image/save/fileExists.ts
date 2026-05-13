
import fileStore from '^/integrations/fileStore';

export default async function fileExists(storageKey: string): Promise<boolean>
{
    return fileStore.hasFile(storageKey);
}
