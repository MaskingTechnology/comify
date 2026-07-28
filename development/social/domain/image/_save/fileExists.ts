
import fileStore from '@comify/common/integrations/fileStore';

export default async function (storageKey: string): Promise<boolean>
{
    return fileStore.hasFile(storageKey);
}
