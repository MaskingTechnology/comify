
import fileStore from '^/integrations/filestore/module';

export default async function store(path: string, buffer: Buffer): Promise<void>
{
    await fileStore.writeFile(path, buffer);
}
