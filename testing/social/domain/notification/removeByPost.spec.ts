
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '@comify/social/domain/notification';
import removeByPost from '@comify/social/domain/notification/removeByPost';

import { POST_RECORDS, seedNotifications } from '../../fixtures';

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
    it('should remove all notifications of a removed post', async () =>
    {
        await removeByPost(POST_RECORDS.FIRST.id);

        const records = await database.searchRecords<Record>(RECORD_TYPE, {
            postId: { EQUALS: POST_RECORDS.FIRST.id },
            deleted: { EQUALS: false }
        });

        expect(records).toHaveLength(0);
    });
});
