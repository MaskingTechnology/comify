
import NotificationHealthCheck from './healthchecks/NotificationHealthCheck';
import notificationService from '../notification/module';

export default new NotificationHealthCheck(notificationService);
