
import fileStore from '@theshelf/filestore';

export default async function retrieveFile(storageKey: string): Promise<Buffer>
{
    return fileStore.readFile(storageKey);
}
