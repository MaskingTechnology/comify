
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '^/integrations/database';

import type { DataModel} from '^/domain/notification';
import { RECORD_TYPE as NOTIFICATION_RECORD_TYPE, Types } from '^/domain/notification';
import create from '^/domain/notification/create';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

beforeAll(async () =>
{
    await database.connect();
});

afterAll(async () =>
{
    await database.disconnect();
});

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
        expect(notification.postId).toBe(VALUES.IDS.POST_RATED);
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
        await create(Types.REACTED_TO_POST, VALUES.IDS.CREATOR1, VALUES.IDS.CREATOR2, VALUES.IDS.REACTION_REACTION);

        const notifications = await database.searchRecords(NOTIFICATION_RECORD_TYPE, {});
        expect(notifications).toHaveLength(1);

        const notification = notifications[0];
        expect(notification.type).toBe(Types.REACTED_TO_POST);
        expect(notification.createdAt).toBeDefined();
        expect(notification.senderId).toBe(VALUES.IDS.CREATOR1);
        expect(notification.receiverId).toBe(VALUES.IDS.CREATOR2);
        expect(notification.postId).toBe(VALUES.IDS.REACTION_REACTION);
    });

    it('should do nothing on failure', async () =>
    {
        //    This only fail on integration level, so there's nothing to do here.
    });
});
