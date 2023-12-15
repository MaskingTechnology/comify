
import FileStorageHealthCheck from './healthchecks/FileStorageHealthCheck';
import fileStorage from '../filestorage/module';

export default new FileStorageHealthCheck(fileStorage);
