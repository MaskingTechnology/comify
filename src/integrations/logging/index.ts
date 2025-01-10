
import Logger from './Logger';
import implementation from './implementation';

const debugEnabled = process.env.LOGGING_DEBUG_ENABLED === 'true';
const logger = new Logger(implementation, debugEnabled);

export default logger;
