
import fileStore from '@theshelf/filestore';

export default async function insertFile(path: string, buffer: Buffer): Promise<void>
{
    await fileStore.writeFile(path, buffer);
}
