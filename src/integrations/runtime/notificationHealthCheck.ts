
import notificationService from '^/integrations/notification/module';

import NotificationHealthCheck from './healthchecks/NotificationHealthCheck';

export default new NotificationHealthCheck(notificationService);
