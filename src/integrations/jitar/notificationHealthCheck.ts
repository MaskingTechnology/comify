
import notificationService from '../notification/module';
import NotificationHealthCheck from './healthchecks/NotificationHealthCheck';

export default new NotificationHealthCheck(notificationService);
