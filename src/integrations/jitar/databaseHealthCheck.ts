
import DatabaseHealthCheck from './healthchecks/DatabaseHealthCheck.js';
import database from '../database/module';

export default new DatabaseHealthCheck(database);
