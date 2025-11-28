
import database from '@theshelf/database';

import DatabaseHealthCheck from './healthchecks/DatabaseHealthCheck';

export default new DatabaseHealthCheck(database);
