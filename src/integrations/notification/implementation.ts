
import { UnknownImplementation } from './definitions/errors.js';
import { NotificationService } from './definitions/interfaces.js';
import createMemory from './implementations/memory/create.js';
import createWebPush from './implementations/webpush/create.js';

const implementations = new Map<string, () => NotificationService>([
    ['memory', createMemory],
    ['webpush', createWebPush],
]);

const DEFAULT_NOTIFICATION_IMPLEMENTATION = 'memory';

const implementationName = process.env.NOTIFICATION_IMPLEMENTATION ?? DEFAULT_NOTIFICATION_IMPLEMENTATION;
const creator = implementations.get(implementationName.toLowerCase());

if (creator === undefined)
{
    throw new UnknownImplementation(implementationName);
}

export default creator();
