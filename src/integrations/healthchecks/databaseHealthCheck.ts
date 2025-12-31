
import database from '@theshelf/database';

import { DatabaseHealthCheck } from '@jitar-plugins/database';

export default new DatabaseHealthCheck(database);
