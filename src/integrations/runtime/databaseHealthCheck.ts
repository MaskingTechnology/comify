
import database from '^/integrations/database/index.js';

import DatabaseHealthCheck from './healthchecks/DatabaseHealthCheck.js';

export default new DatabaseHealthCheck(database);
