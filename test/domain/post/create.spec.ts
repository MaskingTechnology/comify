
import { beforeEach, describe, expect, it } from 'vitest';

import create from '^/domain/post/create/feature';
import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post/definitions';

import database from '^/integrations/database/module';

import { DATABASES, DATA_URLS, FILE_STORES, REQUESTERS } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.withCreators(),
        FILE_STORES.empty()
    ]);
});

describe('domain/post/create', () =>
{
    it('should create an image from a valid data url', async () =>
    {
        await create(REQUESTERS.CREATOR1, DATA_URLS.COMIC_IMAGE);

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});
        expect(posts.length).toBe(1);

        const post = posts[0];
        expect(post?.creatorId).toBe(REQUESTERS.CREATOR1.id);
        expect(post?.comicId).toBeDefined();
        expect(post?.createdAt).toBeDefined();
        expect(post?.ratingCount).toBe(0);
        expect(post?.reactionCount).toBe(0);
    });

    it('should rollback created data at failure', async () =>
    {
        // This should fail at the last action when incrementing the creator's post count
        const promise = create(REQUESTERS.UNKNOWN, DATA_URLS.COMIC_IMAGE);
        await expect(promise).rejects.toThrow('Record not found');

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});
        expect(posts).toHaveLength(0);
    });
});
