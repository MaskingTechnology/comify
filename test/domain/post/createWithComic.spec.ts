
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post';
import createWithComic from '^/domain/post/createWithComic';

import database from '^/integrations/database';

import { DATABASES, DATA_URLS, FILE_STORES, REQUESTERS, TENANTS } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.withCreators(),
        FILE_STORES.empty()
    ]);
});

describe('domain/post/add', () =>
{
    it('should create a post', async () =>
    {
        await createWithComic(REQUESTERS.CREATOR1, TENANTS.default, DATA_URLS.COMIC_IMAGE);

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});
        expect(posts.length).toBe(1);

        const post = posts[0];
        expect(post?.creatorId).toBe(REQUESTERS.CREATOR1.id);
        expect(post?.comicId).toBeDefined();
        expect(post?.createdAt).toBeDefined();
    });
});
