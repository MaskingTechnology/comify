
import fileStore from '@comify/common/integrations/fileStore';

export default async function (storageKey: string): Promise<Buffer>
{
    return fileStore.readFile(storageKey);
}
