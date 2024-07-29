
import { beforeEach, describe, expect, it } from 'vitest';

import create from '^/domain/notification/create/feature';
import { RECORD_TYPE as NOTIFICATION_RECORD_TYPE } from '^/domain/notification/definitions';

import database from '^/integrations/database/module';
import { REQUESTERS } from './fixtures/requesters.fixture';

import { DATABASES } from './fixtures/databases.fixture';
import { VALUES } from './fixtures/values.fixture';

beforeEach(async () =>
{
    await DATABASES.withCreators();

});

describe('domain/notification/create', () =>
{
    it('should create a notification by liking a post', async () =>
    {
        await create(REQUESTERS.CREATOR1, 'rated-post', VALUES.IDS.CREATOR2, VALUES.IDS.POST_RATED);

        const notifications = await database.searchRecords(NOTIFICATION_RECORD_TYPE, {});
        expect(notifications).toHaveLength(1);

        const notification = notifications[0];
        expect(notification.type).toBe('rated-post');
        expect(notification.createdAt).toBeDefined;
        expect(notification.senderId).toBe(REQUESTERS.CREATOR1.id);
        expect(notification.receiverId).toBe(VALUES.IDS.CREATOR2);
        expect(notification?.postId).toBe(VALUES.IDS.POST_RATED);
        expect(notification?.reactionId).toBe(undefined);
    });

    it('should create a notification by liking a comic reaction', async () =>
    {
        await create(REQUESTERS.CREATOR2, 'rated-reaction', VALUES.IDS.CREATOR1, undefined, VALUES.IDS.REACTION_LIKED);

        const notifications = await database.searchRecords(NOTIFICATION_RECORD_TYPE, {});
        expect(notifications).toHaveLength(1);

        const notification = notifications[0];
        expect(notification.type).toBe('rated-reaction');
        expect(notification.createdAt).toBeDefined;
        expect(notification.senderId).toBe(REQUESTERS.CREATOR2.id);
        expect(notification.receiverId).toBe(VALUES.IDS.CREATOR1);
        expect(notification?.postId).toBe(undefined);
        expect(notification.reactionId).toBe(VALUES.IDS.REACTION_LIKED);
    });

    it('should create a notification when someone gets followed', async () =>
    {
        await create(REQUESTERS.CREATOR1, 'started-following', VALUES.IDS.CREATOR2);

        const notifications = await database.searchRecords(NOTIFICATION_RECORD_TYPE, {});
        expect(notifications).toHaveLength(1);

        const notification = notifications[0];
        expect(notification.type).toBe('started-following');
        expect(notification.createdAt).toBeDefined;
        expect(notification.senderId).toBe(REQUESTERS.CREATOR1.id);
        expect(notification.receiverId).toBe(VALUES.IDS.CREATOR2);
    });
});
