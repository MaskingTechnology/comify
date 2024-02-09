
import fileStorage from '../filestorage/module';
import FileStorageHealthCheck from './healthchecks/FileStorageHealthCheck';

export default new FileStorageHealthCheck(fileStorage);
