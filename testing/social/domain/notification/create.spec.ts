
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, Types, type Record } from '@comify/social/domain/notification';
import create from '@comify/social/domain/notification/_create';

import { CREATOR_RECORDS, POST_RECORDS, seedNotifications } from '../../fixtures';

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
    await seedNotifications();
});

describe('index', () =>
{
    it('should create a notification by liking a post', async () =>
    {
        await create(Types.RATED_POST, CREATOR_RECORDS.ALICE.id, POST_RECORDS.THIRD.creatorId, POST_RECORDS.THIRD.id);

        const records = await database.searchRecords<Record>(RECORD_TYPE, {
            type: { EQUALS: Types.RATED_POST },
            senderId: { EQUALS: CREATOR_RECORDS.ALICE.id },
            receiverId: { EQUALS: POST_RECORDS.THIRD.creatorId },
            postId: { EQUALS: POST_RECORDS.THIRD.id }
        });

        expect(records).toHaveLength(1);
    });

    it('should create a notification when someone gets followed', async () =>
    {
        await create(Types.STARTED_FOLLOWING, CREATOR_RECORDS.ALICE.id, CREATOR_RECORDS.DAVID.id);

        const records = await database.searchRecords<Record>(RECORD_TYPE, {
            type: { EQUALS: Types.STARTED_FOLLOWING },
            senderId: { EQUALS: CREATOR_RECORDS.ALICE.id },
            receiverId: { EQUALS: CREATOR_RECORDS.DAVID.id },
            postId: { EQUALS: undefined }
        });

        expect(records).toHaveLength(1);
    });

    it('should create a notification when a reaction is added to a post', async () =>
    {
        await create(Types.REACTED_TO_POST, CREATOR_RECORDS.ALICE.id, POST_RECORDS.FOURTH.creatorId, POST_RECORDS.FOURTH.id);

        const records = await database.searchRecords<Record>(RECORD_TYPE, {
            type: { EQUALS: Types.REACTED_TO_POST },
            senderId: { EQUALS: CREATOR_RECORDS.ALICE.id },
            receiverId: { EQUALS: POST_RECORDS.FOURTH.creatorId },
            postId: { EQUALS: POST_RECORDS.FOURTH.id }
        });

        expect(records).toHaveLength(1);
    });

    it('should do nothing on failure', async () =>
    {
        // This only fail on integration level, so there's nothing to do here.
    });
});
