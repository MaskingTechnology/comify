
import { beforeEach, describe, expect, it } from 'vitest';

import create from '^/domain/comic/create';
import { RECORD_TYPE as COMIC_RECORD_TYPE } from '^/domain/comic/definitions';

import database from '^/integrations/database';

import { DATABASES, FILE_STORES, VALUES } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.empty(),
        FILE_STORES.empty()
    ]);
});

describe('domain/comic/create', () =>
{
    it('should create a comic reaction', async () =>
    {
        const comicId = await create(VALUES.DATA_URLS.COMIC);

        const comic = await database.readRecord(COMIC_RECORD_TYPE, comicId);
        expect(comic?.imageId).toBeDefined();
    });
});
