
import database from '^/integrations/database/module';

import DatabaseHealthCheck from './healthchecks/DatabaseHealthCheck.js';

export default new DatabaseHealthCheck(database);
