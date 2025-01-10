
import fileStore from '^/integrations/filestore';

export default async function retrieveFile(storageKey: string): Promise<Buffer>
{
    return fileStore.readFile(storageKey);
}
