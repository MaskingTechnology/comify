
import { beforeEach, describe, expect, it } from 'vitest';

import database from '^/integrations/database';

import { DataModel, RECORD_TYPE as NOTIFICATION_RECORD_TYPE, Types } from '^/domain/notification';
import create from '^/domain/notification/create';

import { DATABASES } from './fixtures/databases.fixture';
import { REQUESTERS } from './fixtures/requesters.fixture';
import { VALUES } from './fixtures/values.fixture';

beforeEach(async () =>
{
    await DATABASES.withCreators();

});

describe('domain/notification/create', () =>
{
    it('should create a notification by liking a post', async () =>
    {
        await create(Types.RATED_POST, VALUES.IDS.CREATOR1, VALUES.IDS.CREATOR2, VALUES.IDS.POST_RATED);

        const notifications = await database.searchRecords(NOTIFICATION_RECORD_TYPE, {}) as DataModel[];
        expect(notifications).toHaveLength(1);

        const notification = notifications[0];
        expect(notification.type).toBe(Types.RATED_POST);
        expect(notification.createdAt).toBeDefined();
        expect(notification.senderId).toBe(REQUESTERS.CREATOR1.id);
        expect(notification.receiverId).toBe(VALUES.IDS.CREATOR2);
        expect(notification?.targetPostId).toBe(VALUES.IDS.POST_RATED);
        expect(notification?.targetReactionId).toBe(undefined);
    });

    it('should create a notification by liking a comic reaction', async () =>
    {
        await create(Types.RATED_REACTION, VALUES.IDS.CREATOR1, VALUES.IDS.CREATOR2, undefined, VALUES.IDS.REACTION_LIKED);

        const notifications = await database.searchRecords(NOTIFICATION_RECORD_TYPE, {});
        expect(notifications).toHaveLength(1);

        const notification = notifications[0];
        expect(notification.type).toBe(Types.RATED_REACTION);
        expect(notification.createdAt).toBeDefined();
        expect(notification.senderId).toBe(REQUESTERS.CREATOR1.id);
        expect(notification.receiverId).toBe(VALUES.IDS.CREATOR2);
        expect(notification?.targetPostId).toBe(undefined);
        expect(notification.targetReactionId).toBe(VALUES.IDS.REACTION_LIKED);
    });

    it('should create a notification when someone gets followed', async () =>
    {
        await create(Types.STARTED_FOLLOWING, VALUES.IDS.CREATOR1, VALUES.IDS.CREATOR2);

        const notifications = await database.searchRecords(NOTIFICATION_RECORD_TYPE, {});
        expect(notifications).toHaveLength(1);

        const notification = notifications[0];
        expect(notification.type).toBe(Types.STARTED_FOLLOWING);
        expect(notification.createdAt).toBeDefined();
        expect(notification.senderId).toBe(REQUESTERS.CREATOR1.id);
        expect(notification.receiverId).toBe(VALUES.IDS.CREATOR2);
    });

    it('should create a notification when a reaction is added to a post', async () =>
    {
        await create(Types.ADDED_REACTION_POST, VALUES.IDS.CREATOR1, VALUES.IDS.CREATOR2, VALUES.IDS.POST_REACTION, undefined, VALUES.IDS.REACTION_REACTION);

        const notifications = await database.searchRecords(NOTIFICATION_RECORD_TYPE, {});
        expect(notifications).toHaveLength(1);

        const notification = notifications[0];
        expect(notification.type).toBe(Types.ADDED_REACTION_POST);
        expect(notification.createdAt).toBeDefined();
        expect(notification.senderId).toBe(VALUES.IDS.CREATOR1);
        expect(notification.receiverId).toBe(VALUES.IDS.CREATOR2);
        expect(notification.targetPostId).toBe(VALUES.IDS.POST_REACTION);
        expect(notification.targetReactionId).toBe(undefined);
        expect(notification.sourceReactionId).toBe(VALUES.IDS.REACTION_REACTION);
    });

    it('should create a notification when a reaction is added to a reaction', async () =>
    {
        await create(Types.ADDED_REACTION_REACTION, VALUES.IDS.CREATOR1, VALUES.IDS.CREATOR2, undefined, VALUES.IDS.REACTION_REACTION, VALUES.IDS.POST_REACTION);

        const notifications = await database.searchRecords(NOTIFICATION_RECORD_TYPE, {});
        expect(notifications).toHaveLength(1);

        const notification = notifications[0];
        expect(notification.type).toBe(Types.ADDED_REACTION_REACTION);
        expect(notification.createdAt).toBeDefined();
        expect(notification.senderId).toBe(VALUES.IDS.CREATOR1);
        expect(notification.receiverId).toBe(VALUES.IDS.CREATOR2);
        expect(notification.targetPostId).toBe(undefined);
        expect(notification.targetReactionId).toBe(VALUES.IDS.REACTION_REACTION);
        expect(notification.sourceReactionId).toBe(VALUES.IDS.POST_REACTION);
    });

    it('should do nothing on failure', async () =>
    {
        //    This only fail on integration level, so there's nothing to do here.
    });
});
