
import fileStore from '^/integrations/filestore/module';

export default async function retrieveFile(storageKey: string): Promise<Buffer>
{
    return fileStore.readFile(storageKey);
}
