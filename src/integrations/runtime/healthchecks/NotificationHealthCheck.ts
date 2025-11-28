
import type { HealthCheck } from 'jitar';

import type { NotificationService } from '@theshelf/notification';

export default class NotificationHealthCheck implements HealthCheck
{
    readonly #notificationService: NotificationService;
    readonly #name = 'notifications';
    readonly #timeout = 5000;

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
