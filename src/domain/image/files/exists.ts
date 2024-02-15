
import filestorage from '../../../integrations/filestorage/module';

export default async function exists(storageKey: string): Promise<boolean>
{
    return filestorage.hasFile(storageKey);
}
