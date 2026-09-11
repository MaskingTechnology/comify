
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import fileStore from '@comify/common/integrations/files';

import getRecommended from '@comify/social/domain/post/getRecommended';

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
    it('should give all posts except those created by the requester', async () =>
    {
        const posts = await getRecommended(REQUESTERS.CHARLIE, { offset: 0, limit: 7 });

        // Charlie created the third post, so should not be a part of the result.

        expect(posts).toHaveLength(3);
        expect(posts[0].id).toEqual(POST_RECORDS.FOURTH.id);
        expect(posts[1].id).toEqual(POST_RECORDS.SECOND.id);
        expect(posts[2].id).toEqual(POST_RECORDS.FIRST.id);
    });
});
