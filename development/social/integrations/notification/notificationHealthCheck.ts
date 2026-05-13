
import { NotificationHealthCheck } from '@jitar-plugins/notification';

import notificationService from './notificationService';

export default new NotificationHealthCheck(notificationService);
