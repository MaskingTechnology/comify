
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '^/integrations/database';
import fileStore from '^/integrations/fileStore';

import create from '^/domain/comic/create';
import { RECORD_TYPE as COMIC_RECORD_TYPE } from '^/domain/comic/definitions';

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

describe('domain/comic/create', () =>
{
    it('should create a comic', async () =>
    {
        const comicId = await create(VALUES.DATA_URLS.COMIC);
        
        const comic = await database.readRecord(COMIC_RECORD_TYPE, { id: { EQUALS: comicId } });

        expect(comic?.imageId).toBeDefined();
    });
});
