
import fileStore from '@theshelf/filestore';

import { FileStoreHealthCheck } from '@jitar-plugins/filestore';

export default new FileStoreHealthCheck(fileStore);
