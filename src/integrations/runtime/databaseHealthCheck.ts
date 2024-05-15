
import database from '../database/module';
import DatabaseHealthCheck from './healthchecks/DatabaseHealthCheck.js';

export default new DatabaseHealthCheck(database);
