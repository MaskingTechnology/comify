
import filestorage from '../../../integrations/filestorage/module';

export default async function get(storagekey: string): Promise<Buffer>
{

    return filestorage.readFile(storagekey);
}
