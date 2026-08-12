
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import fileStore from '@comify/common/integrations/fileStore';

import create from '@comify/social/domain/post.comic/create';
import { RECORD_TYPE as COMIC_RECORD_TYPE, type Record } from '@comify/social/domain/post.comic/definitions';

import { DATABASES, FILE_STORES, VALUES } from './fixtures';

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
        DATABASES.empty(),
        FILE_STORES.empty()
    ]);
});

describe('domain/post.comic/create', () =>
{
    it('should create a comic', async () =>
    {
        const comicId = await create({ imageDataUrl: VALUES.DATA_URLS.COMIC });

        const result = await database.readRecord<Record>(COMIC_RECORD_TYPE, { id: { EQUALS: comicId } });

        expect(result?.imageId).toBeDefined();
    });
});
