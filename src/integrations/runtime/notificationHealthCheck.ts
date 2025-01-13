
import notificationService from '^/integrations/notification';

import NotificationHealthCheck from './healthchecks/NotificationHealthCheck';

export default new NotificationHealthCheck(notificationService);
