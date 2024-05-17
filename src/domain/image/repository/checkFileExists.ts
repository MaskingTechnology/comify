
import fileStore from '^/integrations/filestore/module';

export default async function checkFileExists(storageKey: string): Promise<boolean>
{
    return fileStore.hasFile(storageKey);
}
