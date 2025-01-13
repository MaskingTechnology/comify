
import fileStore from '^/integrations/filestore';

import FileStoreHealthCheck from './healthchecks/FileStoreHealthCheck';

export default new FileStoreHealthCheck(fileStore);
