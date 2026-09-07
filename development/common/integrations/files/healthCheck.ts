
import { FileStoreHealthCheck } from '@jitar-plugins/files';

import fileStore from './fileStore';

export default new FileStoreHealthCheck(fileStore);
