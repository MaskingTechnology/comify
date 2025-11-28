
import fileStore from '@theshelf/filestore';

import FileStoreHealthCheck from './healthchecks/FileStoreHealthCheck';

export default new FileStoreHealthCheck(fileStore);
