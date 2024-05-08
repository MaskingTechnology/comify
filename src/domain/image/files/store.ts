
import fileStorage from '^/integrations/filestorage/module';

export default async function store(path: string, buffer: Buffer): Promise<void>
{
    await fileStorage.writeFile(path, buffer);
}
