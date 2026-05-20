
import database from './database';
import { DatabaseHealthCheck } from '@jitar-plugins/database';

export default new DatabaseHealthCheck(database);
