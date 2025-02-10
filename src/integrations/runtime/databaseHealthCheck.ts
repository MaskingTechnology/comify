
import database from '^/integrations/database';

import DatabaseHealthCheck from './healthchecks/DatabaseHealthCheck';

export default new DatabaseHealthCheck(database);
