
import fileStore from '^/integrations/filestore/module';

export default async function get(storageKey: string): Promise<Buffer>
{
    return fileStore.readFile(storageKey);
}
