
import fileStorage from '^/integrations/filestorage/module';

export default async function exists(storageKey: string): Promise<boolean>
{
    return fileStorage.hasFile(storageKey);
}
