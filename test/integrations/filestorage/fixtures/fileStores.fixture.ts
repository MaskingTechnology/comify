
import fileStore from '^/integrations/filestore';

import { FILES } from './files.fixture';
import { VALUES } from './values.fixture';

await fileStore.connect();

async function withFile()
{
    await fileStore.clear();

    await fileStore.writeFile(VALUES.FILENAMES.HELLO, FILES.HELLO);
}

export const FILE_STORES = { withFile };
