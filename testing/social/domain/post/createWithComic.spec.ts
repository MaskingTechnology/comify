
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '^/integrations/database';
import eventBroker from '^/integrations/eventBroker';
import fileStore from '^/integrations/fileStore';

import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post';
import createWithComic from '^/domain/post/createWithComic';

import { DATABASES, DATA_URLS, FILE_STORES, REQUESTERS, TENANTS } from './fixtures';

beforeAll(async () =>
{
    await Promise.all([
        database.connect(),
        eventBroker.connect(),
        fileStore.connect()
    ]);
});

afterAll(async () =>
{
    await Promise.all([
        database.disconnect(),
        eventBroker.disconnect(),
        fileStore.disconnect()
    ]);
});

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
        await createWithComic(TENANTS.default, REQUESTERS.CREATOR1, DATA_URLS.COMIC_IMAGE);

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});

        expect(posts.length).toBe(1);

        const post = posts[0];
        
        expect(post?.creatorId).toBe(REQUESTERS.CREATOR1.id);
        expect(post?.comicId).toBeDefined();
        expect(post?.createdAt).toBeDefined();
    });
});
