
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '@comify/social/domain/notification';
import removeByPost from '@comify/social/domain/notification/removeByPost';

import { DATABASES, VALUES } from './fixtures';

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
    await DATABASES.withCreatorsPostsAndNotifications();
});

describe('domain/notification/removeByPost', () =>
{
    it('should remove all notifications of a removed post', async () =>
    {
        await removeByPost(VALUES.IDS.POST_RATED);

        const result = await database.searchRecords<Record>(RECORD_TYPE, { postId: { EQUALS: VALUES.IDS.POST_RATED }, deleted: { EQUALS: false } });

        expect(result).toHaveLength(0);
    });
});
