
import filestorage from '../../../integrations/filestorage/module';

export default async function check(storageKey: string): Promise<boolean>
{
    return filestorage.hasFile(storageKey);
}
