
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '^/integrations/database';

import getByPostId from '^/domain/notification/getByPostId';
import removedPost from '^/domain/notification/notify/removedPost';

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

describe('domain/notification/remove', () =>
{
    it('should remove all notifications of a removed post', async () =>
    {
        await removedPost(VALUES.IDS.POST_RATED);
        
        const result = await getByPostId(VALUES.IDS.POST_RATED);

        expect(result).toHaveLength(0);
    });
});
