
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import fileStore from '@comify/common/integrations/fileStore';

import getByFollowing from '@comify/social/domain/post/getByFollowing';

import { REQUESTERS, POST_RECORDS, fullySeedPosts } from '../../fixtures';

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
    await fullySeedPosts();
});

describe('index', () =>
{
    it('should get posts from everyone followed by the requester', async () =>
    {
        const posts = await getByFollowing(REQUESTERS.CHARLIE, { offset: 0, limit: 7 });

        // Charlie only follows Alice which has 2 posts.

        expect(posts).toHaveLength(2);
        expect(posts[0].id).toBe(POST_RECORDS.SECOND.id);
        expect(posts[1].id).toBe(POST_RECORDS.FIRST.id);
    });
});
