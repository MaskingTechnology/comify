
import fileStore from '^/integrations/filestore/module';

import FileStoreHealthCheck from './healthchecks/FileStoreHealthCheck';

export default new FileStoreHealthCheck(fileStore);
