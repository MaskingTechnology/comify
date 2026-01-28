
import fileStore from '^/integrations/fileStore';

export default async function insertFile(path: string, buffer: Buffer): Promise<void>
{
    await fileStore.writeFile(path, buffer);
}
