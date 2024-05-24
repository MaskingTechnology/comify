
import fileStore from '^/integrations/filestore/module';

export default async function fileExists(storageKey: string): Promise<boolean>
{
    return fileStore.hasFile(storageKey);
}
