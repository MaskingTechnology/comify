
import fileStore from '@comify/common/integrations/files';

export default async function (storageKey: string): Promise<Buffer>
{
    return fileStore.readFile(storageKey);
}
