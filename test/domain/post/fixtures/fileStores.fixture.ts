
import fileStore from '^/integrations/filestore/module';

fileStore.connect();

async function empty(): Promise<void>
{
    await fileStore.clear();
}

export const FILE_STORAGES = { empty };
