
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import fileStore from '@comify/common/integrations/fileStore';

import getRecent from '@comify/social/domain/notification/getRecent';

import { REQUESTERS, NOTIFICATION_RECORDS, fullySeedNotifications } from '../../fixtures';

beforeAll(async () =>
{
    await Promise.all([
        database.connect(),
        fileStore.connect()
    ]);
});

afterAll(async () =>
{
    await Promise.all([
        database.disconnect(),
        fileStore.disconnect()
    ]);
});

beforeEach(async () =>
{
    await fullySeedNotifications();
});

describe('index', () =>
{
    it('should give all notifications for a creator', async () =>
    {
        const notifications = await getRecent(REQUESTERS.ALICE, { offset: 0, limit: 10 });

        expect(notifications).toHaveLength(7);
        expect(notifications[0].id).toBe(NOTIFICATION_RECORDS.DAVID_RATED_FIRST.id);
        expect(notifications[1].id).toBe(NOTIFICATION_RECORDS.CHARLIE_FOLLOWING_ALICE.id);
        expect(notifications[2].id).toBe(NOTIFICATION_RECORDS.BOB_RATED_FIRST.id);
        expect(notifications[3].id).toBe(NOTIFICATION_RECORDS.CHARLIE_REACTED_TO_FIRST.id);
        expect(notifications[4].id).toBe(NOTIFICATION_RECORDS.BOB_FOLLOWING_ALICE.id);
        expect(notifications[5].id).toBe(NOTIFICATION_RECORDS.CHARLIE_RATED_FIRST.id);
        expect(notifications[6].id).toBe(NOTIFICATION_RECORDS.BOB_REACTED_TO_FIRST.id);
    });
});
