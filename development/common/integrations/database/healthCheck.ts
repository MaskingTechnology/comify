
import { DatabaseHealthCheck } from '@jitar-plugins/database';

import database from './database';

export default new DatabaseHealthCheck(database);
