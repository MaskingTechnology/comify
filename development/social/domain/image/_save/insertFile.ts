
import fileStore from '@comify/common/integrations/files';

export default async function (path: string, buffer: Buffer): Promise<void>
{
    await fileStore.writeFile(path, buffer);
}
