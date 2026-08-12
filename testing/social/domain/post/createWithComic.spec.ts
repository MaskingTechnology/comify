
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/eventBroker';
import fileStore from '@comify/common/integrations/fileStore';

import { RECORD_TYPE as POST_RECORD_TYPE, type Record } from '@comify/social/domain/post';
import createWithComic from '@comify/social/domain/post/createWithComic';

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

describe('domain/post/createWithComic', () =>
{
    it('should create a post', async () =>
    {
        await createWithComic(REQUESTERS.CREATOR1, { imageDataUrl: DATA_URLS.COMIC_IMAGE });

        const records = await database.searchRecords<Record>(POST_RECORD_TYPE, {});

        expect(records.length).toBe(1);

        const post = records[0];

        expect(post?.creatorId).toBe(REQUESTERS.CREATOR1.principalId);
        expect(post?.comicId).toBeDefined();
        expect(post?.createdAt).toBeDefined();
    });
});
