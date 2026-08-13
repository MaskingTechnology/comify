
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/eventBroker';
import fileStore from '@comify/common/integrations/fileStore';

import { RECORD_TYPE, type Record } from '@comify/social/domain/post';
import createWithComic from '@comify/social/domain/post/createWithComic';

import { REQUESTERS, IMAGE_DATA_URLS } from '../../fixtures';

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

describe('index', () =>
{
    it('should create a post', async () =>
    {
        const id = await createWithComic(REQUESTERS.ALICE, { imageDataUrl: IMAGE_DATA_URLS.COMIC });

        const record = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } });

        expect(record).toBeDefined();
        expect(record?.creatorId).toBe(REQUESTERS.ALICE.principalId);
        expect(record?.comicId).toBeDefined();
        expect(record?.createdAt).toBeDefined();
    });
});
