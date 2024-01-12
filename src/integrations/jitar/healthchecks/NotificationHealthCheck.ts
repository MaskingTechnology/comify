
import { HealthCheck } from 'jitar';

import { NotificationService } from '../../notification/definitions/interfaces';

export default class FileStorageHealthCheck implements HealthCheck
{
    #notificationService: NotificationService;

    constructor(notificationService: NotificationService)
    {
        this.#notificationService = notificationService;
    }

    get name() { return 'notifications'; }

    get timeout() { return 5000; }

    async isHealthy(): Promise<boolean>
    {
        return this.#notificationService.connected;
    }
}
