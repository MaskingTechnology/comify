
import Database from './Database';
import implementation from './implementation';

const database = new Database(implementation);

export * from './definitions/constants';
export * from './definitions/types';
export { default as DatabaseError } from './errors/DatabaseError';
export { default as NotConnected } from './errors/NotConnected';
export { default as RecordNotCreated } from './errors/RecordNotCreated';
export { default as RecordNotDeleted } from './errors/RecordNotDeleted';
export { default as RecordNotFound } from './errors/RecordNotFound';
export { default as RecordNotUpdated } from './errors/RecordNotUpdated';
export type { Database };
export default database;
