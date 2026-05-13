
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '^/integrations/database';
import fileStore from '^/integrations/fileStore';

import getByFollowingAggregated from '^/domain/post/getByFollowingAggregated';

import { DATABASES, FILE_STORES, REQUESTERS, TENANTS } from './fixtures';


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
    await Promise.all([
        DATABASES.withCreatorsPostsAndRelations(),
        FILE_STORES.withImage()
    ]);
});

describe('domain/post/getByFollowingAggregated', () =>
{
    it('should get posts from everyone followed by the requester', async () =>
    {
        const result = await getByFollowingAggregated(TENANTS.default, REQUESTERS.CREATOR1, { offset: 0, limit: 7 });

        expect(result).toHaveLength(1);
        expect(result[0].creator.following.id).toBe(REQUESTERS.CREATOR2.id);
    });
});
