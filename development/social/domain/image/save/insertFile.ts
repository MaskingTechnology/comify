
import fileStore from '@comify/common/integrations/fileStore';

export default async function insertFile(path: string, buffer: Buffer): Promise<void>
{
    await fileStore.writeFile(path, buffer);
}
