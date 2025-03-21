
import { beforeEach, describe, expect, it } from 'vitest';

import getByPostId from '^/domain/notification/getByPostId';
import removedPost from '^/domain/notification/notify/removedPost';
import { DATABASES, VALUES } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.withCreatorsPostsAndNotifications()
    ]);
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
