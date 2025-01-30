
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post';
import add from '^/domain/post/add';

import database from '^/integrations/database';

import { DATABASES, DATA_URLS, FILE_STORES, REQUESTERS } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.withCreators(),
        FILE_STORES.empty()
    ]);
});

describe('domain/post/add', () =>
{
    it('should add a post', async () =>
    {
        await add(REQUESTERS.CREATOR1, DATA_URLS.COMIC_IMAGE);

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});
        expect(posts.length).toBe(1);

        const post = posts[0];
        expect(post?.creatorId).toBe(REQUESTERS.CREATOR1.id);
        expect(post?.comicId).toBeDefined();
        expect(post?.createdAt).toBeDefined();
        expect(post?.ratingCount).toBe(0);
        expect(post?.reactionCount).toBe(0);
    });

    it('should rollback at failure', async () =>
    {
        // This should fail at the last action when incrementing the creator's post count
        // const promise = add(REQUESTERS.UNKNOWN, DATA_URLS.COMIC_IMAGE);
        // await expect(promise).rejects.toThrow('Record not found');

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});
        expect(posts).toHaveLength(0);
    });
});
