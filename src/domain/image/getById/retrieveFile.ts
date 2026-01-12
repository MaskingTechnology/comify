
import fileStore from '^/integrations/fileStore';

export default async function retrieveFile(storageKey: string): Promise<Buffer>
{
    return fileStore.readFile(storageKey);
}
