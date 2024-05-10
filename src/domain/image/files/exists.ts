
import fileStore from '^/integrations/filestore/module';

export default async function exists(storageKey: string): Promise<boolean>
{
    return fileStore.hasFile(storageKey);
}
