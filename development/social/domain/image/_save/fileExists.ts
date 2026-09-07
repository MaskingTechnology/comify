
import fileStore from '@comify/common/integrations/files';

export default async function (storageKey: string): Promise<boolean>
{
    return fileStore.hasFile(storageKey);
}
