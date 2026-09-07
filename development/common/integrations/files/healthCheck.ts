
import fileStore from './fileStore';

import { FileStoreHealthCheck } from '@jitar-plugins/files';

export default new FileStoreHealthCheck(fileStore);
