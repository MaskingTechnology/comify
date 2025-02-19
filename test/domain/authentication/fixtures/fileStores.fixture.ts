
import fileStore from '^/integrations/filestore';

fileStore.connect();

async function empty(): Promise<void>
{
    await fileStore.clear();
}

export const FILE_STORES = { empty };
