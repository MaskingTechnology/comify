
import fileStorage from '^/integrations/filestorage/module';

export default async function get(storageKey: string): Promise<Buffer>
{
    return fileStorage.readFile(storageKey);
}
