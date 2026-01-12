
import fileStore from './fileStore';

import { FileStoreHealthCheck } from '@jitar-plugins/filestore';

export default new FileStoreHealthCheck(fileStore);
