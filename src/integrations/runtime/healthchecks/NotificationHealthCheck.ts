
import { HealthCheck } from 'jitar';

import { NotificationService } from '^/integrations/notification/definitions/interfaces';

export default class NotificationHealthCheck implements HealthCheck
{
    #notificationService: NotificationService;
    #name = 'notifications';
    #timeout = 5000;

    constructor(notificationService: NotificationService)
    {
        this.#notificationService = notificationService;
    }

    get name() { return this.#name; }

    get timeout() { return this.#timeout; }

    async isHealthy(): Promise<boolean>
    {
        return this.#notificationService.connected;
    }
}
